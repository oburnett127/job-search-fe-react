import request from "../components/Request"

export default class JobService {
    // @ts-ignore
    static getJob({ jobId }) {
        return request({
            url: "/job/get",
            method: "GET",
            body: {id:jobId}
        });
    }
    static getAllJobs() {
        return request({
            url: "/job/list",
            method: "GET"
        });
    }
}