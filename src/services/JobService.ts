import request from "../components/request"

export default class JobService {
    static getJob() {
        return request({
            url: "/job/get",
            method: "GET"
        });
    }
    static getAllJobs() {
        return request({
            url: "/job/list",
            method: "GET"
        });
    }
}