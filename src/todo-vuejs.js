/**
 * Created by sagittar on 2017/6/5.
 */
const STORAGE_KEY='todo-vuejs';
export default {
  fetch (){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
