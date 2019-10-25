import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import advice from './images/advice.png';
import data from './data';

const App = () => {
  // const token = {
  //   token: '9JdgzMbMvwSNu8bQN6fNRPEVzWUxzeC0',
  //   secret: 'Np85e0',
  // };

  const [user, setUser] = useState({
    id: 0,
    name: 'Максим',
    secondName: 'Иванов',
    level: '12',
  });
  const [modalProject, setModalProject] = useState({modal: false, project: 0});
  const [modalAdvice, setModalAdvice] = useState(false);
  const [modalTask, setModalTask] = useState({
    modal: false,
    task: 0,
    type: 'INPROGRESS',
  });

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.topBarContainer}>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.name}>{user.secondName}</Text>
        </View>
        {/*<Image source={ava} style={styles.ava} />*/}
        <View style={styles.LevelContainer}>
          <Text style={styles.LevelText}>{user.level}</Text>
        </View>
      </View>

      <Modal
        isVisible={modalProject.modal}
        hasBackdrop={true}
        backdropColor={'#ffffff'}
        backdropOpacity={1}>
        <SafeAreaView style={styles.ModalProjectContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalProject({...modalProject, modal: false});
            }}>
            <Icon name={'ios-arrow-round-back'} size={40} />
          </TouchableOpacity>
          <View style={styles.ModalProjectContainerCard}>
            <View style={styles.ModalProjectHeaderContainer}>
              {/*<Text style={styles.ModalProjectTextLeftRight}>*/}
              {/*  {projects[0].sprint.endDate}*/}
              {/*</Text>*/}
              <Text style={styles.swiperProjectHeader}>
                {data.boards[modalProject.project].sprint.name}
              </Text>
              {/*<Text style={styles.ModalProjectTextLeftRight}>*/}
              {/*  {projects[0].project.name}*/}
              {/*</Text>*/}
            </View>
            <View style={styles.ModalProjectContent}>
              {/*<Text style={styles.swiperProjectHeader}>{projects[0].name}</Text>*/}
              {/*<Text>Зазачи</Text>*/}
              {modalTask.modal === false ? (
                <View style={{width: '100%', height: '100%'}}>
                  {data.boards[modalProject.project].issues.todo ? (
                    <View>
                      <Text style={styles.ModalProjectTextTaskHeader}>{`ToDo [${
                        data.boards[modalProject.project].issues.todo.length
                      }]`}</Text>
                      <ScrollView style={styles.ModalProjectScrollContainer}>
                        {data.boards[modalProject.project].issues.todo.map(
                          (item, ind) => {
                            return (
                              <TouchableOpacity
                                key={item.id}
                                onPress={() =>
                                  setModalTask({
                                    ...modalTask,
                                    modal: true,
                                    task: ind,
                                    type: 'todo',
                                  })
                                }>
                                <Text style={styles.ModalProjectTextTask}>
                                  {`- ${item.name}`}
                                </Text>
                              </TouchableOpacity>
                            );
                          },
                        )}
                      </ScrollView>
                    </View>
                  ) : null}
                  {data.boards[modalProject.project].issues.INPROGRESS ? (
                    <View>
                      <Text
                        style={
                          styles.ModalProjectTextTaskHeader
                        }>{`In progress [${
                        data.boards[modalProject.project].issues.INPROGRESS
                          .length
                      }]`}</Text>
                      <ScrollView style={styles.ModalProjectScrollContainer}>
                        {data.boards[
                          modalProject.project
                        ].issues.INPROGRESS.map((item, index) => {
                          return (
                            <TouchableOpacity
                              key={item.id}
                              onPress={() =>
                                setModalTask({
                                  ...modalTask,
                                  modal: true,
                                  task: index,
                                  type: 'INPROGRESS',
                                })
                              }>
                              <Text style={styles.ModalProjectTextTask}>
                                {`- ${item.name}`}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </ScrollView>
                    </View>
                  ) : null}
                  {data.boards[modalProject.project].issues.Done ? (
                    <View>
                      <Text style={styles.ModalProjectTextTaskHeader}>{`Done [${
                        data.boards[modalProject.project].issues.Done.length
                      }]`}</Text>
                      <ScrollView style={styles.ModalProjectScrollContainer}>
                        {data.boards[modalProject.project].issues.Done.map(
                          (item, index) => {
                            return (
                              <TouchableOpacity
                                key={item.id}
                                onPress={() =>
                                  setModalTask({
                                    ...modalTask,
                                    modal: true,
                                    task: index,
                                    type: 'INPROGRESS',
                                  })
                                }>
                                <Text style={styles.ModalProjectTextTask}>
                                  {`- ${item.name}`}
                                </Text>
                              </TouchableOpacity>
                            );
                          },
                        )}
                      </ScrollView>
                    </View>
                  ) : null}
                </View>
              ) : (
                <View style={styles.OneTaskContainer}>
                  <Text style={styles.ModalProjectTextLeftRight}>
                    {
                      data.boards[modalProject.project].issues[
                        `${modalTask.type}`
                      ][modalTask.task].description
                    }
                  </Text>
                  <TouchableOpacity
                    style={styles.TaskCloseButton}
                    onPress={() =>
                      setModalTask({
                        ...modalTask,
                        modal: false,
                      })
                    }>
                    <Text style={styles.ModalProjectTextLeftRight}>
                      Закрыть
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      <Modal
        isVisible={modalAdvice.modal}
        hasBackdrop={true}
        backdropColor={'#000'}
        backdropOpacity={0.45}>
        <View style={styles.ModalAdviceContainer}>
          <Text style={styles.ModalAdviceHeader}>Советик дня</Text>
          <View
            style={{
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {modalAdvice.id === 0 ? (
              <Text style={styles.AdvicesText}>
                Максим, на тебя назначено уже 8 задач, но ни одну ты не взял в
                работу, посмотри пожалуйста на них повнимательнее :)
              </Text>
            ) : (
              <Text style={styles.AdvicesText}>
                Максим, твоя продуктивность за последние две недели немного
                упала, скажи пожалуйста, тебя что-то отвлекает? Я могу помочь?
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={[styles.TaskCloseButton, {alignSelf: 'center'}]}
            onPress={() => setModalAdvice(false)}>
            <Text style={styles.ModalProjectTextLeftRight}>Понятно</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.swiperForProjects}>
        <Swiper>
          {data.boards.map((item, inde) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.swiperProjectOut}
                onPress={() => setModalProject({modal: true, project: inde})}>
                <Text style={styles.swiperProjectHeader}>
                  {item.sprint.name}
                </Text>
                <View style={styles.swiperProject}>
                  {/*<Text style={styles.sprintTime}>{item.sprint.endDate}</Text>*/}
                  <Text style={styles.nameText}>{item.project.name}</Text>
                  {item.issues.todo ? (
                    <Text style={styles.taskText}>{`To-Do: ${
                      item.issues.todo.length
                    }`}</Text>
                  ) : null}
                  {item.issues.INPROGRESS ? (
                    <Text style={styles.taskText}>{`In progress: ${
                      item.issues.INPROGRESS.length
                    }`}</Text>
                  ) : null}
                  {item.issues.Done ? (
                    <Text style={styles.taskText}>{`Done: ${
                      item.issues.Done.length
                    }`}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </Swiper>
      </View>
      <View style={styles.swiperForAdvice}>
        <Swiper>
          <View style={styles.AdvicesView}>
            <TouchableOpacity
              style={styles.swiperAdvice}
              onPress={() => setModalAdvice({modal: true, id: 0})}>
              <Image source={advice} style={styles.AdvicesImage} />
              <Text style={styles.AdvicesText}>Советик</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.swiperAdvice}
              onPress={() => setModalAdvice({modal: true, id: 1})}>
              <Image source={advice} style={styles.AdvicesImage} />
              <Text style={styles.AdvicesText}>Советик</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity*/}
            {/*  style={styles.swiperAdvice}*/}
            {/*  onPress={() => setModalAdvice(true)}>*/}
            {/*  <Image source={advice} style={styles.AdvicesImage} />*/}
            {/*  <Text style={styles.AdvicesText}>Советик</Text>*/}
            {/*</TouchableOpacity>*/}
          </View>
          {/*<View style={styles.AdvicesView}>*/}
          {/*  <TouchableOpacity*/}
          {/*    style={styles.swiperAdvice}*/}
          {/*    onPress={() => setModalAdvice(true)}>*/}
          {/*    <Image source={advice} style={styles.AdvicesImage} />*/}
          {/*    <Text style={styles.AdvicesText}>Советик</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*  <TouchableOpacity*/}
          {/*    style={styles.swiperAdvice}*/}
          {/*    onPress={() => setModalAdvice(true)}>*/}
          {/*    <Image source={advice} style={styles.AdvicesImage} />*/}
          {/*    <Text style={styles.AdvicesText}>Советик</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  topBarContainer: {
    flex: 0.06,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LevelContainer: {
    borderWidth: 2,
    borderRadius: 40,
    borderColor: '#0A929D',
    backgroundColor: '#080F23',
    height: 45,
    width: 45,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LevelText: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#F17A7B',
    fontFamily: 'Gill Sans',
  },
  name: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#1D3E4C',
    fontFamily: 'Gill Sans',
  },
  swiperForProjects: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperProjectOut: {
    marginTop: '9%',
    width: '75%',
    height: '85%',
    alignSelf: 'center',
    backgroundColor: '#F17A7B',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#02555D',
    justifyContent: 'space-between',
    overflow: 'hidden',
    // paddingBottom: 4,
  },
  swiperProject: {
    width: '100%',
    height: '92%',
    marginTop: '3.4%',
    // justifyContent: 'center',
    backgroundColor: '#F0F9FF',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#077580',
    alignItems: 'center',
  },
  swiperProjectHeader: {
    fontSize: 28,
    alignSelf: 'center',
    color: '#077782',
    fontFamily: 'Gill Sans',
    marginTop: 10,
  },
  swiperForAdvice: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: '#077782',
    fontFamily: 'Gill Sans',
    fontSize: 32,
    marginTop: 25,
    marginBottom: 40,
  },
  sprintTime: {
    color: '#F17A7B',
    fontFamily: 'Gill Sans',
    fontSize: 26,
    marginTop: 15,
    marginBottom: 70,
    alignSelf: 'center',
  },
  taskText: {
    color: '#077782',
    fontFamily: 'Gill Sans',
    fontSize: 22,
    marginTop: 30,
  },
  AdvicesView: {
    flexDirection: 'row',
    height: '100%',
  },
  swiperAdvice: {
    width: '30%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1.666%',
  },
  AdvicesImage: {
    height: '55%',
    width: '77%',
    borderRadius: 125,
    marginBottom: 10,
  },
  AdvicesText: {
    color: '#090022',
    fontFamily: 'Gill Sans',
    fontSize: 18,
  },
  ModalProjectContainer: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
  ModalProjectContainerCard: {
    width: '100%',
    height: '95%',
    alignSelf: 'center',
    backgroundColor: '#F17A7B',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#02555D',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  ModalProjectImage: {
    width: '100%',
    height: '55%',
    borderRadius: 20,
  },
  ModalProjectHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: '12%',
  },
  ModalProjectContent: {
    width: '100%',
    height: '88%',
    backgroundColor: '#F0F9FF',
    // borderWidth: 1,
    borderRadius: 20,
    // borderColor: '#077580',
    alignItems: 'center',
    padding: 30,
    // marginTop: '12%',
  },
  ModalProjectTextLeftRight: {
    color: '#090022',
    fontFamily: 'Gill Sans',
    fontSize: 18,
  },
  ModalProjectTextTaskHeader: {
    alignSelf: 'flex-start',
    color: '#F17A7B',
    fontFamily: 'Gill Sans',
    fontSize: 28,
  },
  ModalProjectScrollContainer: {
    paddingVertical: 10,
  },
  ModalProjectTextTask: {
    color: '#21273A',
    fontFamily: 'Gill Sans',
    fontSize: 24,
  },
  TaskCloseButton: {
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#F17A7B',
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OneTaskContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ModalAdviceContainer: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#077A85',
    width: '70%',
    height: '50%',
    alignSelf: 'center',
    backgroundColor: '#F0F9FF',
    padding: 15,
  },
  ModalAdviceHeader: {
    color: '#F17A7B',
    fontFamily: 'Gill Sans',
    fontSize: 28,
    alignSelf: 'center',
  },
});
export default App;
