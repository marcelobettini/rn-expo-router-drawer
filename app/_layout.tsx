import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home Screen',
                    }}
                />
                <Drawer.Screen
                    name="user/[id]"
                    options={{
                        drawerLabel: 'User',
                        title: 'User Details',
                    }}
                />
                <Drawer.Screen
                    name="about"
                    options={{
                        drawerLabel: 'About',
                        title: 'Quienes Somos',
                    }}
                />
                <Drawer.Screen
                    name="(tabs)/workInProgress"
                    options={{
                        drawerLabel: 'En Progreso',
                        title: 'Trabajos en progreso',
                    }}
                />
                <Drawer.Screen
                    name="(tabs)/workReady"
                    options={{
                        drawerLabel: 'Terminados',
                        title: 'Trabajos Terminados',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
