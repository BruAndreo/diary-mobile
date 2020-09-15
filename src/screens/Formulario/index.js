import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Switch } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import moment from 'moment';
import Styles from './style';
import Compromissos from '../../app/Compromissos';
import tiposNegocios from '../../services/TiposNegocioMock';
import tiposGarantias from '../../services/TiposGarantiaMock';
import Colors from '../../styles/Colors';
import TiposNegocioMock from '../../services/TiposNegocioMock';

class Formulario extends Component {
  state = {
    data: null,
    hora: null,
    enderecoVisita: null,
    nomeContato: null,
    email: null,
    telefone: null,
    nomeEmpresa: null,
    cpfCnpj: null,
    enderecoCliente: null,
    propositoNegocio: [],
    valorSolicitado: null,
    qtdParcelas: null,
    tiposGarantia: null,
    recomendado: true,
    parecerComercial: null,
    proximosPassos: null
  };

  constructor(props) {
    super(props);

    this.props = props;
    this.idCompromisso = props.route.params.idCompromisso;
  }

  componentDidMount() {
    const compromissos = new Compromissos();
    const dados = compromissos.getCompromissoById(this.idCompromisso);

    this.setState({
      data: dados.at,
      hora: dados.hour,
      enderecoVisita: this.getEnderecoFormatado(dados.address),
      enderecoCliente: this.getEnderecoFormatado(dados.address),
      nomeEmpresa: dados.nomeEmpresa,
      nomeContato: dados.nomeResponsavel,
      qtdParcelas: 12,
      recomendado: true
    });
  }

  getEnderecoFormatado(address) {
    return `${address.street}, ${address.number}, ${address.city}-${address.uf} - ${address.cep}`;
  }

  handleNomeContato = text => {
    this.setState({ nomeContato: text });
  }

  handleEmail = text => {
    this.setState({ email: text });
  }

  handleTelefone = text => {
    this.setState({ Telefone: text });
  }

  handleEmpresa = text => {
    this.setState({ nomeEmpresa: text });
  }

  handleCpfCnpj = text => {
    this.setState({ cpfCnpj: text });
  }

  handleEnderecoCliente = text => {
    this.setState({ enderecoCliente: text });
  }

  handlePropositoNegocio = text => {
    this.setState({ propositoNegocio: text });
  }

  handleValorSolicitado = text => {
    this.setState({ valorSolicitado: text });
  }

  handleQtdParcelas = text => {
    this.setState({ qtdParcelas: text });
  }

  handleTiposGarantia = text => {
    this.setState({ tiposGarantia: text });
  }

  handleRecomendado = text => {
    this.setState({ recomendado: !this.state.recomendado });
  }

  handleParecerComercial = text => {
    this.setState({ parecerComercial: text });
  }

  handleProximosPassos = text => {
    this.setState({ proximosPassos: text });
  }

  render() {
    return (
      <ScrollView horizontal={false}>
        <View style={Styles.container}>
          <View style={Styles.visitaBox}>
            <Text style={Styles.visitaText}>Data da Visita: {moment(this.state.data).format('DD/MM/YYYY')} às {this.state.hora}</Text>
            <Text style={Styles.visitaText}>Endereço da Visita: {this.state.enderecoVisita}</Text>
          </View>

          <View style={Styles.pessoaisBox}>
            <Text style={Styles.titleBox}>Dados Pessoais</Text>

            <View>
              <Text style={Styles.label}>Nome do Contato</Text>
              <TextInput
                value={this.state.nomeContato}
                onChangeText={this.handleNomeContato}
                underlineColorAndroid={'#123456'}
                placeholder='Nome do Contato'
                spellCheck={false}
                maxLength={100}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>Email</Text>
              <TextInput
                value={this.state.email}
                onChangeText={this.handleEmail}
                underlineColorAndroid={'#123456'}
                placeholder='E-mail'
                spellCheck={false}
                maxLength={100}
                autoCompleteType={'email'}
                autoCapitalize={'none'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>Telefone</Text>
              <TextInput
                value={this.state.telefone}
                onChangeText={this.handleTelefone}
                underlineColorAndroid={'#123456'}
                placeholder='Telefone'
                spellCheck={false}
                maxLength={11}
                autoCompleteType={'off'}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

          </View>

          <View style={Styles.pessoaisBox}>
            <Text style={Styles.titleBox}>Dados Empresariais</Text>

            <View>
              <Text style={Styles.label}>Nome da empresa</Text>
              <TextInput
                value={this.state.nomeEmpresa}
                onChangeText={this.handleEmpresa}
                underlineColorAndroid={'#123456'}
                placeholder='Nome da empresa'
                spellCheck={false}
                maxLength={100}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>CPF / CNPJ</Text>
              <TextInput
                value={this.state.cpfCnpj}
                onChangeText={this.handleCpfCnpj}
                underlineColorAndroid={'#123456'}
                placeholder='CPF / CNPJ'
                spellCheck={false}
                maxLength={14}
                autoCompleteType={'off'}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>Endereço</Text>
              <TextInput
                value={this.state.enderecoCliente}
                onChangeText={this.handleEnderecoCliente}
                underlineColorAndroid={'#123456'}
                placeholder='Endereço'
                spellCheck={false}
                maxLength={150}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={true}
                style={Styles.textInputs} />
            </View>

          </View>

          <View style={Styles.pessoaisBox}>
            <Text style={Styles.titleBox}>Proposta</Text>

            <View>
              <Text style={Styles.label}>Proposito do negócio</Text>
              <TextInput
                value={this.state.propositoNegocio}
                onChangeText={this.handlePropositoNegocio}
                underlineColorAndroid={'#123456'}
                placeholder='Proposito do negócio'
                spellCheck={false}
                maxLength={100}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={false}
                style={Styles.textInputs} />

              <MultiSelect
                hideTags
                items={TiposNegocioMock}
                uniqueKey="idTipoNegocio"
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={this.handlePropositoNegocio}
                selectedItems={this.state.propositoNegocio}
                selectText="Tipos de Negócios"
                searchInputPlaceholderText="Procure..."
                onChangeInput={ (text)=> console.log(text) }
                tagRemoveIconColor={Colors.primaryDark}
                tagBorderColor={Colors.primaryDark}
                tagTextColor={Colors.primaryDark}
                selectedItemTextColor={Colors.verdeEscuro}
                selectedItemIconColor={Colors.verdeEscuro}
                itemTextColor={Colors.primaryDark}
                displayKey="name"
                searchInputStyle={{ color: Colors.verdeEscuro }}
                submitButtonColor={Colors.verdeEscuro}
                submitButtonText="Pronto!"
              />
            </View>

            <View>
              <Text style={Styles.label}>Valor Solicitado - R$</Text>
              <TextInput
                value={this.state.valorSolicitado}
                onChangeText={this.handleValorSolicitado}
                underlineColorAndroid={'#123456'}
                placeholder='R$ 0,00'
                spellCheck={false}
                maxLength={14}
                autoCompleteType={'off'}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>Quantidade de parcelas</Text>
              <TextInput
                value={this.state.qtdParcelas}
                onChangeText={this.handleQtdParcelas}
                underlineColorAndroid={'#123456'}
                placeholder='1'
                spellCheck={false}
                maxLength={3}
                autoCompleteType={'off'}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                multiline={false}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>Tipos de Garantia</Text>
              <TextInput
                value={this.state.tiposGarantia}
                onChangeText={this.handleTiposGarantia}
                underlineColorAndroid={'#123456'}
                placeholder='Garantias'
                spellCheck={false}
                maxLength={150}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={true}
                style={Styles.textInputs} />
            </View>

          </View>

          <View style={Styles.pessoaisBox}>
            <Text style={Styles.titleBox}>Conclusão</Text>

            <View>
              <Text style={Styles.label}>Recomendado</Text>

              <View style={Styles.radio}>
                <Text style={Styles.radioText}>Não</Text>
                <Switch
                  trackColor={{ false: Colors.error, true: Colors.verdeEscuro }}
                  thumbColor={this.state.recomendado ? Colors.verdeEscuro : Colors.error}
                  onValueChange={this.handleRecomendado}
                  value={this.state.recomendado}
                />
                <Text style={Styles.radioText}>Sim</Text>
              </View>
            </View>

            <View>
              <Text style={Styles.label}>Parecer Comercial</Text>
              <TextInput
                value={this.state.parecerComercial}
                onChangeText={this.handleValorSolicitado}
                underlineColorAndroid={'#123456'}
                placeholder='Parecer comercial'
                spellCheck={false}
                maxLength={300}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={true}
                style={Styles.textInputs} />
            </View>

            <View>
              <Text style={Styles.label}>Próximos passos</Text>
              <TextInput
                value={this.state.proximosPassos}
                onChangeText={this.handleQtdParcelas}
                underlineColorAndroid={'#123456'}
                placeholder='Próximos passos'
                spellCheck={false}
                maxLength={300}
                autoCompleteType={'off'}
                autoCapitalize={'words'}
                multiline={true}
                style={Styles.textInputs} />
            </View>

          </View>

          <View>
            <TouchableOpacity style={Styles.button} onPress={() => ({})}>
              <Text style={Styles.textButton}>Enviar Formulário</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default Formulario;
