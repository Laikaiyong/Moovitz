from google.transit import gtfs_realtime_pb2
from google.protobuf.json_format import MessageToDict
import pandas as pd
from pandas.api.types import (
    is_categorical_dtype,
    is_datetime64_any_dtype,
    is_numeric_dtype,
    is_object_dtype,
)
from requests import get
import random
import time
import json

import streamlit as st

import folium
from folium.plugins import MarkerCluster
from folium.plugins import Search
from streamlit_folium import st_folium

st.set_page_config(
    layout="wide",
    page_title="Bus | Moovitz",
    page_icon="🚍"
)

option = st.selectbox(
    'Bus options',
    ('rapid-bus-kl', 'rapid-bus-kuantan', 'rapid-bus-penang', 'mybas-johor'))
# Sample GTFS-R URL from Malaysia's Open API
URL = ""
if (option == "mybas-johor"):
    URL = "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-johor"
else:
    URL = f'https://api.data.gov.my/gtfs-realtime/vehicle-position/prasarana?category={option}'
 
# Parse the GTFS Realtime feed
feed = gtfs_realtime_pb2.FeedMessage()
response = get(URL)
feed.ParseFromString(response.content)
 
# Extract and print vehicle position information
vehicle_positions = [MessageToDict(entity.vehicle) for entity in feed.entity]
print(f'Total vehicles: {len(vehicle_positions)}')
df = pd.json_normalize(vehicle_positions)

tab1, tab2 = st.tabs(["Map View", "Data Table View"])

with tab1:
    ip_address = [4.356413856735363, 103.00764593699655]
    match option:
        case 'rapid-bus-kl':
            ip_address = [3.315143565060173, 101.60099765655472]
            df["trip.routeId"] = df["trip.routeId"].str[:-1] 

        case 'rapid-bus-kuantan': 
            ip_address = [3.8056856225280593, 103.3233851476217]
            df["trip.routeId"] = df["trip.routeId"].str[:-1] 
        
        case 'rapid-bus-penang':
            ip_address = [5.320985318929512, 100.36447204836247]
            
        case 'mybas-johor':
            ip_address =  [1.7958555965019127, 103.5584237529655]

    m = folium.Map(
        ip_address, zoom_start=11
    )

    marker_cluster = MarkerCluster().add_to(m)
    if option == 'mybas-johor':
        for index, row in df.iterrows():
            bus_pin = folium.CustomIcon(icon_image= "https://cdn-icons-png.flaticon.com/512/183/183756.png", icon_size=(30, 30))
            pdf = pd.DataFrame(
                data=[[
                    "trip.tripId", row["trip.tripId"]], ["Latitude", row["position.latitude"]],
                    ["Longitude", row["position.longitude"]
                ]], columns=[
                    "Name",
                    "Value"
                ]
            )
            html = row["trip.routeId"] + pdf.to_html(
                classes="table table-striped table-hover table-condensed table-responsive"
            )
            popup = folium.Popup(html)
            folium.Marker(
                [row["position.latitude"], row["position.longitude"]],
                icon=bus_pin,
                popup=popup, tooltip=row["trip.routeId"], name=row["trip.routeId"]
            ).add_to(marker_cluster)
    else:
        for index, row in df.iterrows():
            bus_pin = folium.CustomIcon(icon_image= "https://cdn-icons-png.flaticon.com/512/183/183756.png", icon_size=(30, 30))
            pdf = pd.DataFrame(
                data=[[
                    "trip.tripId", row["trip.tripId"]],
                    ["License Plate", row["vehicle.licensePlate"]],
                    ["Speed", row["position.speed"]], ["Latitude", row["position.latitude"]],
                    ["Longitude", row["position.longitude"]
                ]], columns=[
                    "Name",
                    "Value"
                ]
            )
            html = row["trip.routeId"] + pdf.to_html(
                classes="table table-striped table-hover table-condensed table-responsive"
            )
            popup = folium.Popup(html)
            folium.Marker(
                [row["position.latitude"], row["position.longitude"]],
                icon=bus_pin,
                popup=popup, tooltip=row["trip.routeId"],
                name=row["trip.routeId"]
            ).add_to(marker_cluster)
    
    servicesearch = Search(
        layer=marker_cluster,
        search_label="name",
        placeholder='Search for a route id (e.g. T410)',
        collapsed=False,
    ).add_to(m)
    st_folium(m, width=725, returned_objects=[])

    # "https://rapid-track.vercel.app/api/track?route=173"

with tab2:
    new_df = df.copy()
    st.dataframe(new_df)