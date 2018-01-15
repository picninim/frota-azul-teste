export const Utils = {
    // Array
   gropArrayBy(arr: any[], by: number) {
        const times = Math.floor(arr.length % by) === 0 ? arr.length / by : (arr.length / by) + 1;
        const groupedArr = [];
          for (let time = 1; time <= times ; time++) {
            groupedArr.push(arr.slice((time * by) - by, time * by));
        }
        return groupedArr;
    }
};
