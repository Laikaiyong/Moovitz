import { Avatar, AvatarImage } from "@/components/ui/avatar";
   
export default function BadgesList() {
    return (
        <>
            <div className="flex pt-2">
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                        src="https://camo.githubusercontent.com/fa502cbbea2456c51ccfd7377262440ebf555b89b31806c52ca7cb54fba07bb5/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f796f6c6f2d64656661756c742e706e67"
                    />
                </Avatar>
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                        src="https://camo.githubusercontent.com/73d85f4dcf892b1693e4f74b32c06b4f6621c571afd664af4143c3fa4fc0ce31/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f70756c6c2d736861726b2d64656661756c742e706e67"
                    />
                </Avatar>
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                        src="https://camo.githubusercontent.com/cd0b9991396aa8bc4c45fdff5052d47da7afb01c1daf8cc8b02e45627acdf238/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f717569636b647261772d64656661756c742e706e67"
                    />
                </Avatar>
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                        src="https://github.githubassets.com/images/modules/profile/achievements/mars-2020-contributor-default.png"
                    />
                </Avatar>
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                        src="https://camo.githubusercontent.com/a8c9e62c43e6d2b3015763decd6dbd168c48159a9f85dc91be655084b176ed86/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f7374617273747275636b2d64656661756c742e706e67"
                    />
                </Avatar>
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                        src="https://camo.githubusercontent.com/2ae0861e97bfba2d3250ceb7db103356b3b35161e273d48120199382d6eac03a/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f706169722d65787472616f7264696e616972652d64656661756c742e706e67"
                    />
                </Avatar>
            </div>
        </>
    )
}