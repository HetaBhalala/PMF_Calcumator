import {StyleSheet} from 'react-native';
import colors from '../../Theme/color';
import {PX} from '../../Theme/PX';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: PX(10),
    justifyContent: 'space-between',
  },
  txtInputStyle: {
    backgroundColor: colors.GREY,
    borderRadius: PX(10),
    paddingHorizontal: PX(10),
    padding: PX(10),
    width:PX(200)
  },
  subContainer: {
    marginVertical: PX(10),
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTxt: {
    textAlign: 'center',
    marginVertical: PX(10),
    color: colors.BLACK,
  },
  questionSection: {
    alignItems: 'center',
     justifyContent: 'center'
    },
  submitBtn: {
    backgroundColor: colors.PRIMARY,
    paddingHorizontal: PX(50),
    paddingVertical: PX(10),
    borderRadius: PX(10),
    marginHorizontal: PX(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: PX(30),
  },
  btnTxt: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: colors.BLACK,
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop:PX(20)
  },
});
