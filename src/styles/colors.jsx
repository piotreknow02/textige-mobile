import { useColorScheme } from 'react-native'

const isDarkMode = useColorScheme() === 'dark';

export default Colors = {
    // global
    primaryColor: "#6FFFF8",
    descondaryColor: "#FF9100",
    accentColor: "#F4FFB6",
    secondaryAccentColor: "#FFCA76",

    // themed
    backgroundColor: isDarkMode ? "#0f0f0f" : "#fff",
    backgroundAccentColor: isDarkMode ? "#cecece" : "#ddd",
    textColor: isDarkMode ? "#ececec" : "#222",
    textAccentColor: isDarkMode ? "#c8fffc" : "#012f4e",
}

/*
    global
	--primary-color: #6FFFF8;
	--secondary-color: #FF9100;
	--accent-color: #F4FFB6;
	--secondary-accent-color: #FFCA76;
    dark
    --bg-color: #0f0f0f;
    --bg-accent-color: #cecece;
    --text-color: #ececec;
    --text-accent-color: #c8fffc;
    --shadow: 0px 0px 26px 18px rgba(0,0,0,0.5);
    light
    --bg-color: #fff;
    --bg-accent-color: #dddddd;
    --text-color: #222;
    --text-accent-color: #012f4e;
    --shadow: 0px 0px 26px 0px rgba(0,0,0,0.4);
*/