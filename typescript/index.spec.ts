const array = [1, 2, 3];

const arr = array.map((num) => num.toString());

function doThings (param: string): void {
    arr.push(param);
}
doThings('4');

// test member delimiter style
interface Test {
    name: string,
}

// test member delimiter style inline
function useInlineInterface (obj: { name: string, age?: number }): void {
    doThings(obj.name);
}

const test: Test = {
    name: 'Me',
};

useInlineInterface(test);

class Animal {
    protected type: string;
    public constructor (private name: string, type: string) {
        this.type = type;
    }

    public getName (): string {
        return this.name;
    }
}

const dog = new Animal('Sam', 'Labrador');
doThings(dog.getName());
