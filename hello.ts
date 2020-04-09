    class Student {  
        studCode: number;  
        studName: string;  
      
        constructor(code: number, name: string) {  
                this.studName = name;  
                this.studCode = code;  
        }  
      
        getGrade() : string {  
            return "A+" ;  
        }  
    }  
