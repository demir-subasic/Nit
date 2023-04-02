class Osoba {
    constructor(ime, godine){
       let _ime = ime;
       let _godine = godine;

       this.getIme = function(){
        return _ime
       }

       this.getGodine = function(){
        return _godine
       }

       this.setIme = function(ime){
        _ime = ime
       }

       this.setGodine = function(godine){
        _godine = godine
       }
    }
}

let osoba = new Osoba("Pera", 25)

console.log(osoba.getIme())
console.log(osoba.getGodine())

osoba.setIme("Neko")
osoba.setGodine(30)

console.log(osoba.getIme())
console.log(osoba.getGodine())





console.log("_________________________");





class Student {
    constructor(ime, prezime, pol, index, godine){
        let _ime = ime;
        let _prezime = prezime;
        let _pol = pol;
        let _index = index;
        let _godine = godine;


        this.getIme = function(){
            return _ime
        }
    
        this.getPrezime = function(){
            return _prezime
        }

        this.getPol = function(){
            return _pol
        }

        this.getIndex = function(){
            return _index
        }
        this.getGodine = function(){
            return _godine
        }

        this.setIme = function(ime){
            _ime = ime
        }

        this.setPrezime = function(prezime){
            _prezime = prezime
        }
        
        this.setPol = function(pol){
            _pol = pol
        }

        this.setIndex = function(index){
            _index = index
        }
        this.setGodine = function(godine){
            _godine = godine
        }

    }
}

const Ispisi = (content) => {
    console.log(content)
}

let student = new Student("Demir", "Subasic", "Muski", 1, 20)

Ispisi(student.getIme())
Ispisi(student.getPrezime())
Ispisi(student.getPol())
Ispisi(student.getIndex())
Ispisi(student.getGodine())


console.log("----------------NOVE VRENDOSTI-----------")


student.setIme("Umer")
student.setPrezime("Sacirovic")
student.setPol("Muski")
student.setIndex(9)
student.setGodine(16)


Ispisi(student.getIme())
Ispisi(student.getPrezime())
Ispisi(student.getPol())
Ispisi(student.getIndex())
Ispisi(student.getGodine())






