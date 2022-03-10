"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const requestHeaders = {
    Authorization: `Token ${process.env.GITHUB_ACCESS_KEY}`,
    Accept: 'application/json'
};
// success
describe('GET /', () => {
    it('Should throw error for required parameter search', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/?page=1&order=desc&per_page=5&sort=stars')
            .set(requestHeaders)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
            if (err)
                return done(err);
            return done();
        });
    });
    it('Should throw error for invalid order value', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/?page=1&order=dsc&per_page=5&sort=stars')
            .set(requestHeaders)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
            if (err)
                return done(err);
            return done();
        });
    });
    it('Should return repos list', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/?page=1&order=desc&search=mongodb://localhost:27017+in:file&per_page=5&sort=stars')
            .set(requestHeaders)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
            if (err)
                return done(err);
            return done();
        });
    });
});
//# sourceMappingURL=index.test.js.map