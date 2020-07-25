function print(msg){
    console.log(msg);
}

function firstRecurringCharacter(arr)
{
    let copiedArray = [];
    for(let i=0; i<arr.length;i++)
    {
        if(!copiedArray.includes(arr[i]))
        {
            copiedArray.push(arr[i]);
        }
        else
        {
            return arr[i];
        }
    }
    return undefined;
}
let array = [2,5,5,2,3,4,5];

let ts = (new Date()).getMilliseconds();
print('ts is : ' + ts);

let recurringCharacter = firstRecurringCharacter(array);
let newTs = new Date().getMilliseconds();
print('new ts is : ' + newTs);
print('time taken is : ' + ( newTs - ts));

console.log("First recurring character is "+recurringCharacter);

function usingHashMap(arr)
{
    let map = {};
    for(let i=0;i<arr.length;i++)
    {
        if(map!==undefined)
        {
            if(map[arr[i]])
            {
                return arr[i];
            }
            else
            {
                map[arr[i]] = i;
            }
        }
    }
    return undefined;
}
let recurringCharacterHashMap =usingHashMap(array);
console.log("First recurring character using hashmaps is "+recurringCharacterHashMap);