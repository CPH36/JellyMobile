import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Role, useAuth } from '../../context/AuthContext';

const DrawerLayout = () => {
	const { authState } = useAuth();

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						headerTitle: 'Home',
						drawerLabel: 'Home',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.authenticated === null}
					
				/>

				<Drawer.Screen
					name="Faucet"
					
					options={{
						headerTitle: 'JellyFishCoin',
						drawerLabel: 'Faucet',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cash-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="Rewards"
					
					options={{
						headerTitle: 'Jelly Rewards',
						drawerLabel: 'Rewards',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="diamond-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="Music"
					
					options={{
						headerTitle: 'Music Videos',
						drawerLabel: 'Music',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="musical-note-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="Marketplace"
					
					options={{
						headerTitle: 'Marketplace',
						drawerLabel: 'Market',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="people-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="LeaderBoard"
					
					options={{
						headerTitle: 'LeaderBoard',
						drawerLabel: 'Leader',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="rocket-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/><Drawer.Screen
				name="news"
				
				options={{
					headerTitle: 'Newsfeed',
					drawerLabel: 'News',
					drawerIcon: ({ size, color }) => (
						<Ionicons name="newspaper-outline" size={size} color={color} />
					)
				}}
				redirect={authState?.role !== Role.USER}
			   />
				<Drawer.Screen
					name="admin"
					options={{
						headerTitle: 'Admin Area',
						drawerLabel: 'Admin',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.ADMIN}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default DrawerLayout;