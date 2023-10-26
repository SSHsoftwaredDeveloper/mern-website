import { Typography , useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetwen";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsord
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img 
            width="100%"
            height="auto"
            alt="advert"
            src="http://localhost:3001/assets/info4.jpeg"
            style={{borderRadius : "0.75rem" , margin : "0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main}>MikaCosmetics</Typography>
                <Typography color={medium}>mikacosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your Pathway To Stunning And Immaculate Beauty And Make Sure Your Skin Is Exfoliating Skin And Shining Like Light.
            </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget;