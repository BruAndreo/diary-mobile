import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from './style';
import TypesCompromissos from '../../lib/TiposDeCompromissos';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';

export default CompromissoCard = props => {
  const isVisit = props.type === TypesCompromissos.VISIT;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.push('Detalhes', { idCompromisso: props.id, navigation: navigation })}>
      <View style={isVisit ? Style.cardVisit : Style.cardMeeting}>
        <View style={isVisit ? Style.headerVisit : Style.headerMeeting}>
          <Text style={Style.textHeader}>{isVisit ? 'Visita' : 'Reunião'}</Text>
        </View>

        <View style={Style.bodyCard}>

          <View style={Style.nomeEempresa}>
            <View style={Style.iconName}>
              <Icon name='person' size={22} color={Colors.primaryColor} />
              <Text style={Style.responsavel}>{props.nomeResponsavel}</Text>
            </View>

            <View style={Style.iconName}>
              <Icon name='location-city' size={22} color={Colors.primaryColor} />
              <Text style={Style.responsavel}>{props.nomeEmpresa}</Text>
            </View>
          </View>

          <View style={Style.iconName}>
            <Icon name='location-on' size={22} color={Colors.primaryColor} />
            <Text style={Style.responsavel}>{props.endereco}</Text>
          </View>

          <View style={Style.nomeEempresa}>
            <View style={Style.iconName}>
              <Icon name='event' size={22} color={Colors.primaryColor} />
              <Text style={Style.responsavel}>{props.dia}</Text>
            </View>

            <View style={Style.iconName}>
              <Icon name='schedule' size={22} color={Colors.primaryColor} />
              <Text style={Style.responsavel}>{props.horario}</Text>
            </View>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
};
