import ballerina/http;
import ballerinax/mysql.driver as _;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"], // add front end host url here
        allowCredentials: true,
        maxAge: 84900
    }
}

service /gramaCertificate on new http:Listener(9093) {
    //get all certificate requests
    resource function get allCertRequests() returns Request[]|error {

        Request[] certificate_requests = [];
        stream<Request, error?> resultStream = certifyDb->query(`SELECT * from certificaterequests WHERE status = 0`);
        check from Request req in resultStream
            do {
                certificate_requests.push(req);
            };
        check resultStream.close();
        return certificate_requests;
    }

    resource function post addCertificateRequest(@http:Payload NewRequest req) returns int|error? {
        //req should be in the form { "division_id": 1, "NIC": "string", "address": "string" }
        return addCertificateRequest(req);
    }

}