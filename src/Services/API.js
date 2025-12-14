

import axios from "axios"
import User from "../Models/User"
import Activity from "../Models/Activity"
import AverageSessions from "../Models/AverageSessions"
import Performance from "../Models/Performance"
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../Mocks/mockDatas"

const BASE_URL = "http://localhost:3000"
const USE_MOCK = false //true pour passer sur les mockDatas//

//Configuration des types d'infos//
const CONFIG= {
    user:  {
        endpoint: (id) => `/user/${id}`,
        mockData: USER_MAIN_DATA,
        model: User,
        idScript: "id"
    },
    activity : {
        endpoint: (id) => `/user/${id}/activity`,
        mockData: USER_ACTIVITY,
        model: Activity,
        idScript: "userId"
    },
    averageSessions: {
        endpoint: (id) => `/user/${id}/average-sessions`,
        mockData: USER_AVERAGE_SESSIONS,
        model: AverageSessions,
        idScript: "userId"
    },
    performance: {
        endpoint: (id) => `/user/${id}/performance`,
        mockData: USER_PERFORMANCE,
        model: Performance,
        idScript: "userId"
    }
}

//Fonction pour aller chercher les datas selon le type et la source des données//
export async function fetchData(type, userId) {
    const {endpoint, mockData, model, idScript} = CONFIG[type]
    
    if (USE_MOCK) {
        const data = mockData.find(item => item[idScript] === userId)
        return new model(data)
        
    } else {
        const response = await axios.get(`${BASE_URL}${endpoint(userId)}`)
        return new model (response.data.data)
    }
}

//Call des fonctions pour chaque type//
export const getUserInfo = (userId) => fetchData("user", userId)
export const getActivity = (userId) => fetchData("activity", userId)
export const getAverageSessions = (userId) => fetchData("averageSessions", userId)
export const getPerformance = (userId) => fetchData("performance", userId)
