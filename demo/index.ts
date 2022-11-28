// rxJs 案例

// 案例1
// import { Observable } from "rxjs";
//类似于迭代器 next 发出通知  complete通知完成
// const observable = new Observable(subscriber=>{
//     subscriber.next(1)
//     subscriber.next(2)
//     subscriber.next(3)
//
//     setTimeout(()=>{
//         subscriber.next(4)
//         subscriber.complete()
//     },1000)
// })
//
// observable.subscribe({
//     next:(value)=>{
//         console.log(value)
//     }
// })



// 案例2
// import { Observable, interval, take } from "rxjs";
// import { map, filter,reduce,find,findIndex } from 'rxjs/operators'
//
//
// const subs = interval(500).pipe(map(v => ({ num: v })), filter(v => (v.num % 2 == 0))).subscribe((e) => {
//     console.log(e)
//     if (e.num == 10) {
//         subs.unsubscribe()
//     }
// })


// 案例3 -- 前端
// import { Observable, interval, take,of,retry,fromEvent } from "rxjs";
// import { map, filter,reduce,find,findIndex } from 'rxjs/operators'
//
// const dom = fromEvent(document,'click').pipe(map(e=>e.target))
// dom.subscribe((e)=>{
//
// })



// 案例4
import { Observable, interval, take,of,retry } from "rxjs";
import { map, filter,reduce,find,findIndex ,} from 'rxjs/operators'


interval(500).pipe(take(5)).subscribe((e) => {
    console.log(e)
})

of(1,2,434,5,636546,31233,35,2,5,2,6).pipe(take(5)).subscribe((e) => {
    console.log(e)
})
