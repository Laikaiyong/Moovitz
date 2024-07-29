import requests
import pandas as pd
import fastparquet
import streamlit as st
from datetime import datetime, timedelta

st.set_page_config(
    layout="wide",
    page_title="Rider | Moovitz",
    page_icon="🏇",
    initial_sidebar_state="collapsed"
)

@st.cache_data
def load_data():
    URL_DATA = 'https://storage.data.gov.my/transportation/ridership_headline.parquet'
    df = pd.read_parquet(URL_DATA)
    return df

df = load_data()
plot_date = datetime(2024, 7, 30) - timedelta(days = 100)
# plot_date = datetime.now() - timedelta(days = 100)


def load_view(df):
    if 'date' in df.columns: df['date'] = pd.to_datetime(df['date'])
    
    yearmin = df['date'].min().year
    monthmin = df['date'].min().month
    daymin = df['date'].min().day

    yearmax = df['date'].max().year
    monthmax = df['date'].max().month
    daymax = df['date'].max().day

    pre_select = (datetime(yearmin,monthmin,daymin), datetime(yearmax,monthmax,daymax ))
    
    start_date = st.slider(
        "Starting date",
        value = max(pre_select) - timedelta(days = 7),
        min_value = min(pre_select),
        max_value = max(pre_select),
        format="MM/DD/YYYY"
    )


    df = df[
        df['date'] >= start_date.strftime('%Y-%m-%d')
    ]
        
    st.line_chart(
        df,
        x = "date",
        y = [
            "bus_rkl",
            "bus_rkn",
            "bus_rpn",
            "rail_lrt_ampang",
            "rail_mrt_kajang",
            "rail_lrt_kj",
            "rail_monorail",
            "rail_mrt_pjy",
            "rail_ets",
            "rail_intercity",
            "rail_komuter_utara",
            "rail_tebrau",
            "rail_komuter"
        ],
        x_label = "Date",
        y_label = "Lines"
    )

load_view(df)
