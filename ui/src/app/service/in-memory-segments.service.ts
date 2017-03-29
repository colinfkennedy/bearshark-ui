import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemorySegmentsService implements InMemoryDbService {
  createDb() {
    let segments = [
      {
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
      }
    ];
    return {segments};
  }
}
