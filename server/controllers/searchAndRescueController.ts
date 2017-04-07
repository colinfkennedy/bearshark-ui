import {Request, Response} from 'express';
import {SearchService} from '../service/searchService'
import {Config} from '../config';
import * as rp from  'request-promise';

export class SearchAndRescueController {
  searchService: SearchService = new SearchService();

  search(req: Request, res: Response): void {
    console.log('Received Search Request: ', req.body);

    let searchApiEndpoint = Config.get('searchAndRescueApi');
    console.log('Using Search and Rescue endpoint: ', searchApiEndpoint);

    // let options = {
    //   method: 'POST',
    //   uri: searchApiEndpoint,
    //   body: req.body,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   json: true // Automatically stringifies the body to JSON
    // };

    res.send({
      results: 'From Server',
      data: [{
        segmentLongName: 'Test Segment 1',
        id: 123456,
        aceId: 456789,
        impressions: 100,
        dataRevenue: 5555,
        revenue: 6666,
        price: 1
      },
        {
          segmentLongName: 'Test Segment 2',
          id: 123457,
          aceId: 456780,
          impressions: 101,
          dataRevenue: 8888,
          revenue: 9999,
          price: 2
        }]
    });

    // rp(options)
    //   .then(parsedBody => {
    //     res.send({
    //       results: 'From Server',
    //       data: parsedBody
    //     });
    //     console.log('Response sent');
    //   })
    //   .catch(
    //     function (err) {
    //       console.error('Error making search request: ', err);
    //       res.status(500).send('Something went wrong');
    //     }
    //   );
  };

  getSegmentDetails(req: Request, res: Response): void {
    console.log('Received Get Segment Details Request: ', req.body);
    let data;
    if (req.body.segmentId === 123456) {
      data = {
        segmentLongName: 'Test Segment 1',
        id: 123456,
        aceId: 456789,
        impressions: 100,
        dataRevenue: 5555,
        revenue: 6666,
        price: 1
      };
    } else {
      data = {
        segmentLongName: 'Test Segment 2',
        id: 123457,
        aceId: 456780,
        impressions: 101,
        dataRevenue: 8888,
        revenue: 9999,
        price: 2
      };
    }
    res.send({
      data: data
    });
  };
}
