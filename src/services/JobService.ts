import request from "../components/Request"

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