import {babyData} from '../data'

export function sortArray(baby1:{id:number, name:string, sex:string}, baby2:{id:number, name:string, sex:string}): number {
    if (baby1.name <baby2.name){
        return -1
    } else if (baby1.name > baby2.name) {
        return 1
    }else {
        return 0
    }

}
export const sortedBabyData = babyData.sort(sortArray)