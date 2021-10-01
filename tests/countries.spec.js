import {expect} from 'chai';
import CountriesHelper from '../helpers/countries.helper';

describe('country codes', function () {
    const countriesHelper = new CountriesHelper();

    before(async function() {
        await countriesHelper.get();
    });
    it('response status code is 200', async function () {
        expect(countriesHelper.response.statusCode).to.eq(200);
    });

    it('response has an array with least one item', async function () {
        expect(countriesHelper.response.body.length).to.be.at.least(1);
    });

    it('response has an strings array of strings', async function () {
        for (let countryCode of countriesHelper.response.body) {
            expect(countryCode).to.be.a('string');
        }
    });
});