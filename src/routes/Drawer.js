import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      
      {/* Adicione mais telas do drawer aqui, se necessário */}
    </Drawer.Navigator>
  );
};
