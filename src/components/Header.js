import React from "react";
import {View} from 'react-native';
import {faBell,faCog,faHistory} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from "./style";

const Header = () => {
    return (
        <View style={styles.container}>
        
            <FontAwesomeIcon style={styles.icons} icon= {faHistory} size= {25} />
            <FontAwesomeIcon style={styles.icons} icon= {faCog}  size={25}/>
            <FontAwesomeIcon style={styles.icons} icon= {faBell} size={25} />
        </View>
    )

}
export default Header;







