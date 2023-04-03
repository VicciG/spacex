import launches from '../../mocks/launches.json';
import { mapLaunchData } from './launchData';

describe('launchData', () => {
  test('should map data correctly', () => {
    const mockLaunchData = launches;
    const expected = [
      {
        key: '5eb87cd9ffd86e000604b32a',
        name: 'FalconSat',
        status: {
          success: false,
          reason: 'merlin engine failure',
        },
        payload: {
          id: '5eb0e4b5b6c3bb0006eeb1e1',
          type: 'Satellite',
        },
        date: '2006-03-24T22:30:00.000Z',
        core: '5e9e289df35918033d3b2623',
        image: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
      },
      {
        key: '5eb87cdaffd86e000604b32b',
        name: 'DemoSat',
        status: {
          success: false,
          reason: 'harmonic oscillation leading to premature engine shutdown',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e2',
          type: 'Dragon 1.0',
        },
        date: '2007-03-21T01:10:00.000Z',
        core: '5e9e289ef35918416a3b2624',
        image: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
      },
      {
        key: '5eb87cdbffd86e000604b32c',
        name: 'Trailblazer',
        status: {
          success: false,
          reason: 'residual stage-1 thrust led to collision between stage 1 and stage 2',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2008-08-03T03:34:00.000Z',
        core: '5e9e289ef3591814873b2625',
        image: 'https://images2.imgbox.com/6c/cb/na1tzhHs_o.png',
      },
      {
        key: '5eb87cdbffd86e000604b32d',
        name: 'RatSat',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2008-09-28T23:15:00.000Z',
        core: '5e9e289ef3591855dc3b2626',
        image: 'https://images2.imgbox.com/95/39/sRqN7rsv_o.png',
      },
      {
        key: '5eb87cdcffd86e000604b32e',
        name: 'RazakSat',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2009-07-13T03:35:00.000Z',
        core: '5e9e289ef359184f103b2627',
        image: 'https://images2.imgbox.com/ab/5a/Pequxd5d_o.png',
      },
      {
        key: '5eb87cddffd86e000604b32f',
        name: 'Falcon 9 Test Flight',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2010-06-04T18:45:00.000Z',
        core: '5e9e289ef359185f2b3b2628',
        image: 'https://images2.imgbox.com/73/7f/u7BKqv2C_o.png',
      },
      {
        key: '5eb87cdeffd86e000604b330',
        name: 'COTS 1',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2010-12-08T15:43:00.000Z',
        core: '5e9e289ef35918187c3b2629',
        image: 'https://images2.imgbox.com/fa/dc/FOUDQ0Sn_o.png',
      },
      {
        key: '5eb87cdfffd86e000604b331',
        name: 'COTS 2',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2012-05-22T07:44:00.000Z',
        core: '5e9e289ef35918f39c3b262a',
        image: 'https://images2.imgbox.com/c5/f4/XfLVgbaO_o.png',
      },
      {
        key: '5eb87ce0ffd86e000604b332',
        name: 'CRS-1',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2012-10-08T00:35:00.000Z',
        core: '5e9e289ff3591821a73b262b',
        image: 'https://images2.imgbox.com/3e/91/hlGiK49a_o.png',
      },
      {
        key: '5eb87ce1ffd86e000604b333',
        name: 'CRS-2',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2013-03-01T19:10:00.000Z',
        core: '5e9e289ff3591884e03b262c',
        image: 'https://images2.imgbox.com/bd/fe/lXUYKL28_o.png',
      },
      {
        key: '5eb87ce1ffd86e000604b334',
        name: 'CASSIOPE',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2013-09-29T16:00:00.000Z',
        core: '5e9e289ff359180ae23b262d',
        image: 'https://images2.imgbox.com/f8/27/XwZPEhTJ_o.png',
      },
      {
        key: '5eb87ce2ffd86e000604b335',
        name: 'SES-8',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2013-12-03T22:41:00.000Z',
        core: '5e9e289ff35918862c3b262e',
        image: 'https://images2.imgbox.com/4e/f8/rqu7XWMF_o.png',
      },
      {
        key: '5eb87ce3ffd86e000604b336',
        name: 'Thaicom 6',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2014-01-06T18:06:00.000Z',
        core: '5e9e289ff3591878603b262f',
        image: 'https://images2.imgbox.com/5c/20/AsqTXJDC_o.png',
      },
      {
        key: '5eb87ce4ffd86e000604b337',
        name: 'CRS-3',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2014-04-18T19:25:00.000Z',
        core: '5e9e289ff3591829343b2630',
        image: 'https://images2.imgbox.com/ae/3c/yVvE2vVh_o.png',
      },
      {
        key: '5eb87ce4ffd86e000604b338',
        name: 'OG-2 Mission 1',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2014-07-14T15:15:00.000Z',
        core: '5e9e28a0f3591870a63b2631',
        image: 'https://images2.imgbox.com/a4/44/YWAUBkOe_o.png',
      },
      {
        key: '5eb87ce5ffd86e000604b339',
        name: 'AsiaSat 8',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2014-08-05T08:00:00.000Z',
        core: '5e9e28a0f359186e2e3b2632',
        image: 'https://images2.imgbox.com/dd/4d/szidadu8_o.png',
      },
      {
        key: '5eb87ce6ffd86e000604b33a',
        name: 'AsiaSat 6',
        status: {
          success: true,
          reason: '',
        },
        payload: {
          id: '5eb0e4b6b6c3bb0006eeb1e3',
          type: 'Dragon 1.0',
        },
        date: '2014-09-07T05:00:00.000Z',
        core: '5e9e28a0f35918b1bc3b2633',
        image: 'https://images2.imgbox.com/d4/ea/jdJqr6He_o.png',
      },
    ];
    const mapped = mapLaunchData(mockLaunchData);

    expect(mapped).toEqual(expected);
  });
});

export {};
