const request = require("supertest");
const app = require("../../../app/bootstrap");
const { generateFakeMutants } = require("../../../app/shared/faker/GenerateFakeMutants");
const db = require("../../../database/sequelize/postgresql/postgres.client");

describe("mutant controller", () => {

    beforeEach(async () => {
        await db.sync({ force: true });
    });

    it("should say is mutant", async () => {
        const response = await request(app).post("/mutant").send({
            dna: [
                "ATGCGA",
                "CGGGGC",
                "TTATGT",
                "AGAATA",
            ]
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ isMutant: true });

    });

    it("should not be mutant", async () => {
        
        const response = await request(app).post("/mutant").send({
            dna: [
                "ATGCGA",
                "CGGAGC",
                "TTATGT",
                "AGAATA",
            ]
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ isMutant: false });

    });

    it("should get mutant stats with ratio 0.5", async () => {

        await generateFakeMutants(1, 2);
        
        const response = await request(app).get("/mutant/stats");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            count_mutant_dna: 1,
            count_human_dna: 2,
            ratio: 0.5
        });
    })

});