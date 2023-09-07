import { Resource } from "../models/Resource"
import { Task } from "../models/Task"

export const tasks: Task[] = [
    {
        id: 1,
        title: "task1",
        startDate: 1691269200000,
        endDate: 1694072658009,
        userUid: "2bd34e3e-23da-4392-9dd1-f3c3ee32d9c6",
        projectUid: "2bd34e3e-23da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 2,
        title: "task2",
        startDate: 1691269200000,
        endDate: 1694072658009,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d9c6",
        projectUid: "2bd34e3e-55da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 3,
        title: "task3",
        startDate: 1691269200000,
        endDate: 1694072658009,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 4,
        title: "task4",
        startDate: 1688504400000,
        endDate: 1688677200000,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 5,
        title: "task5",
        startDate: 1688504400000,
        endDate: 1688677200000,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 6,
        title: "task6",
        startDate: 1688504400000,
        endDate: 1688677200000,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 7,
        title: "task5",
        startDate: 1679259600000,
        endDate: 1679778000000,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 8,
        title: "task8",
        startDate: 1679259600000,
        endDate: 1679778000000,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    {
        id: 9,
        title: "task8",
        startDate: 1679259600000,
        endDate: 1679778000000,
        userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    },
    // {
    //     id: 5,
    //     title: "task5",
    //     startDate: 1688504400000,
    //     endDate: 1688677200000,
    //     userUid: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
    //     projectUid: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1"
    // }
]

export const projects = [
    {
        id: "2bd34e3e-23da-4392-9dd1-f3c3ee32d9s1",
        title: "project1"
    },
    {
        id: "2bd34e3e-55da-4392-9dd1-f3c3ee32d9s1",
        title: "project2"
    },
    {
        id: "2bd34e3e-66da-4392-9dd1-f3c3ee32d9s1",
        title: "project3"
    }
]

export const resources: Resource[] = [
    {
        id: "2bd34e3e-23da-4392-9dd1-f3c3ee32d9c6",
        name: "Юзер1",
        tasks: []
    },
    {
        id: "2bd34e3e-23da-4392-9dz2-f3c3ee32d9c6",
        name: "Юзер2",
        tasks: []        
    },
    {
        id: "2bd34e3e-23da-4392-9dz2-f3c3ee32d2c6",
        name: "Юзер3",
        tasks: []
    }
    
]