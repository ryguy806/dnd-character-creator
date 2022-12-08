export default class Character {
    private _name: string = ""
    private _species: string = ""
    private _classes: string[] = []
    private _levels: number[] = []
    private _id: number
    constructor(name: string, speices: string, classes: string[], levels: number[], id: number){
       this._name = name;
       this._species = speices
       this._classes = classes
       this._levels = levels
       this._id = id

    }

    getName = () => {return this._name}
    getSpecies = () => {return this._species}
    getClasses = () => {return this._classes}
    getLevels = () => {return this._levels}
    getID = () => {return this._id}

    classesAndLevelsToString = () => {
        let classesAndLevels: string = ""
        for(let i = 0; i < this._classes.length; i++) {
            classesAndLevels += `${this._classes[i]} ${this._levels[i]}`
            if(i+1 !> this._classes.length) classesAndLevels += '/'
        }
        return classesAndLevels
    }
}