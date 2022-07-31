import NodeCache from "node-cache";
const cachedData = new NodeCache();

interface CachedValue {
    value:any,
}
const genKeysWithType = (args: any):string =>{
    let ret:string = '';
    for(let i=0;i<args.length;i++) {
        ret+=`${args[i]}-`
    }
    return ret;
}
export default function CacheData() {
    console.log('initialized cache data service ');
    return function (
        target: any,
        propertyName: string, 
        propertyDescriptor: PropertyDescriptor
    ){
        const originalMethod = propertyDescriptor.value;
        propertyDescriptor.value = function (...args: any[]) {
            // generate key with type of arguments
            const keyWithType:string = genKeysWithType(args);
            const key:string = `${propertyName}${keyWithType}`;
            console.log('unique key -> ', key);
            const cachedValue: CachedValue | undefined = cachedData.get(key);
            // check if cachedValue is present
            if(cachedValue) {
                return Promise.resolve(cachedValue.value);
            } else {
                return originalMethod.apply(this, args).then((result: any)=>{
                    if(result) {
                        cachedData.set(key, {value: result});
                    }
                    return result;
                });
            }
        };

        // return decorated descriptor
        return propertyDescriptor;
    };
}
export function ClearData(param:string) {
    return function (
        target: any,
        propertyName: string, 
        propertyDescriptor: PropertyDescriptor
    ){
        const originalMethod = propertyDescriptor.value;
        propertyDescriptor.value = function (...args: any[]) {
            const cData = cachedData.get(param);
            if(cData) {
                cachedData.del(param);
            }
            return originalMethod.apply(this, args);
        }
        // return decorated descriptor
        return propertyDescriptor;
    };
}