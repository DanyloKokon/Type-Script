
import './App.css'

function Task1() {


  const userName: string = "Oleg"
  let age: number = 22
  let price: number = 100
  let year: number = 2026
  let isStudent: boolean = false

  if (isStudent) {
    console.log("Студент навчається");
  } else {
    console.log('Користувач не є студентом');
  }

  ///=================5=======================

  let value1: string | null = null;
  let value2: string | undefined = undefined;
  value1 = "True"
  value2 = "False"
  console.log(value1, value2);
  console.log(userName);
  console.log(age, price, year);

  let userId: string | number
  userId = "id"
  console.log(userId);
  userId = 2
  console.log(userId);

  //========================6==========================

  const grades: number[] = [10, 8, 12, 9, 7];
  const gradesSum: number = grades.reduce((sum, grade) => sum + grade, 0);
  const gradesAverage: number = gradesSum / grades.length;
  const highestGrade: number = Math.max(...grades);

  console.log('Сума оцінок:', gradesSum);
  console.log('Середня оцінка:', gradesAverage);
  console.log('Найбільша оцінка:', highestGrade);

  //==================7==========================

  const technologies: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
  ];
  technologies.push("PostgreSQL")
  technologies.map((i) => {
    console.log(i);
  })

  //==================8=================

  const data: (string | number)[] = [
    "Oleg",
    22,
    "Aberdeen",
    2026,
  ];
  data.push("Daniel")
  data.push(4)

  //====================9======================

  let completedTasks: boolean[] = [
    true
  ];
  console.log(completedTasks);

  //==================10===========================


  let users: {
    name: string;
    age: number;
    isOnline: boolean;
  }[] = [];

  users.push({ name: "Lera", age: 14, isOnline: false })
  users.push({ name: "Katia", age: 16, isOnline: false })
  users.push({ name: "Polina", age: 15, isOnline: false })
  console.log(users);

  //================11==============


  const user: {
    name: string;
    age: number;
    email: string;
  } = {
    name: "Oleg",
    age: 22,
    email: "example@gmail.com",
  };
  console.log(user);


  //=================12==================
  const userEs: {
    name: string;
    age: number;
    phone?: number;
  }[] = [];
  userEs.push({ name: "Lera", age: 14, phone: 1234567890 })
  userEs.push({ name: "Katia", age: 16 })


  //===================13=======================


  type Product = {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
  };

  const prod: Product = {
    id: 1,
    title: 'Banana',
    price: 5,
    inStock: true
  }
  console.log(prod);

  //==================14=====================


  type Task = {
    id: number;
    title: string;
    completed: boolean;
  };

  const taskData: Task[] = [
    { id: 1, title: 'JSx', completed: false },
    { id: 2, title: 'Tsx', completed: true },
    { id: 3, title: 'SQL', completed: false },
    { id: 4, title: 'Redux', completed: true },
    { id: 5, title: 'React', completed: false },
  ]


  taskData.map((i) => {
    console.log(i);
  })

  let plsh: any = []

  taskData.map((i) => {

    if (i.completed === true) {
      plsh.push(i)
    }
  })
  console.log(plsh);

  //=======================15======================


  function sayHello(name: string): string {
    return `Hi, oleg`
    console.log('Hi', name);
  }
  sayHello("Oleh")


  //======================16====================


  function sum(a: number, b: number): number {
    console.log(a + b);
    return a + b
  }
  sum(1, 2)

  //=========================17========================


  function isAdult(age: number): boolean {
    if (age === 18 || age > 18) {
      return true
    } else {
      return false
    }
  }
  isAdult(18)

  //=======================18===========================


  function showMessage(message: string): void {
    console.log(message);
  }
  showMessage('Hi world')
  //=====================19====================


  function createUser(
    name: string,
    age: number,
    city?: string
  ): void {
    if (city) {
      console.log(name, age, city);
    } else {
      console.log(name, age);
    }
  }
  createUser("lila", 15, "michigan")
  //======================20==============================


  function calculateDiscount(
    price: number,
    discount: number = 10
  ): number {
    console.log(price - price * discount / 100);
    return price - price * discount / 100
  }

  calculateDiscount(10, 10)


  return (
    <>

    </>
  )
}



export default Task1
