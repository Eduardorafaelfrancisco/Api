 import { Drawer } from 'expo-router/drawer';

 export default function DrawerLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name='home'
                options={{
                    drawerLabel: 'home',
                    title: 'Início'

                }}
                />
            <Drawer.Screen
                name='settings/index'
                options={{
                    drawerLabel: 'settings',
                    title: 'configuração'

                }}
                />
                
        </Drawer>
    )
 }