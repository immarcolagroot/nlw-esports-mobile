import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GameParams } from "../../@types/navigation";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { Heading } from "../../components/Heading";

import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);

    const route = useRoute();
    const navigation = useNavigation();

    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    useEffect(() => {
        fetch(`http://192.168.0.109:3000/games/${game.id}/ads`)
            .then((response) => response.json())
            .then((data) => setDuos(data));
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={30}
                        />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.rigth} />
                </View>

                <Image
                    source={{ uri: game.banner }}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList
                    data={duos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <DuoCard data={item} onConect={() => {}} />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </Background>
    );
}
