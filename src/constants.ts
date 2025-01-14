export type CourseType = {
  title: string;
  description: string;
  authors: string;
  duration: string;
  createdDate: string;
};

const courses: CourseType[] = [
  {
    title: "Angular",
    description: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s...`,
    authors: "Dave Haisenberg, Tony Ja",
    duration: "2:30 hours",
    createdDate: "20.03.2012",
  },
  {
    title: "React",
    description: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s...`,
    authors: "Dave Simonnds, Valentina Lary",
    duration: "1:00 hours",
    createdDate: "14.08.2017",
  },
  {
    title: "ASP .NET",
    description: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s...`,
    authors: "Sam Smith, Tony Robbins",
    duration: "3:30 hours",
    createdDate: "01.06.2022",
  },
];

export default courses;
