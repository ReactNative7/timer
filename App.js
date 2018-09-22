import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Label} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {mytimer:0, counterStart:'',editable:true}
  }
  render(){
    return (
        <Container>
          <Header></Header>
          <Content style={{padding: 20}} >
            <Grid>
              <Row>
                <Col>
                  <Text style={{fontSize:30, textAlign:'center',marginVertical:20,}}>Timer</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Item floatingLabel>
                    <Label>Enter Time</Label>
                    <Input 
                      keyboardType="numeric"
                      onChangeText={(text) => this.setState({mytimer:text})}
                      value={this.state.mytimer.toString()}
                      maxLength={3}
                      editable={this.state.editable}
                    />
                  </Item>
                </Col>
              </Row>
              <Row style={{height:60, marginTop:20}}>
                <Col>
                  <Button block success
                    onPress={this.onStartTime.bind(this)}
                  >
                    <Text>Start</Text>
                  </Button>
                </Col>
                <Col>
                <Button block danger
                  onPress={this.onEndTime.bind(this)}
                >
                    <Text>Stop</Text>
                  </Button>
                </Col>
                <Col>
                <Button block warning 
                  onPress={this.onReset.bind(this)}
                >
                    <Text>Reset</Text>
                  </Button>
                </Col>
              </Row>
              <Row style={{justifyContent:'center',marginTop:50}}>
                <Text style={{
                  width:100,
                  height:100, 
                  backgroundColor:'black',
                  color:'white',
                  fontSize:30,
                  borderRadius: 50,
                  textAlign:'center',
                  lineHeight:100,}}>
                  {this.state.mytimer}
                </Text>
              </Row>
            </Grid>
          </Content>
        </Container>
    );
  }
  onStartTime(){
    clearInterval(this.state.counterStart);  
    this.state.counterStart = setInterval(this.onStart.bind(this) , 1000);
    this.setState({editable:false});
  }
  onStart(){
    if(this.state.mytimer != 0){
      this.setState({mytimer: this.state.mytimer - 1});
    }else{
      clearInterval(this.state.counterStart);  
    }
    
  }
  onReset(){
    this.setState({mytimer: 0});
    clearInterval(this.state.counterStart);
    this.setState({editable:true});
  }
  onEndTime(){
    clearInterval(this.state.counterStart);
  }
}