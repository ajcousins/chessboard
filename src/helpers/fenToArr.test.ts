import { fenToArr } from '.';
import { placement_1, placement_2, placement_3 } from './test_data/fenToArr'

describe('fenToArr', () => {
  it('should return undefined for incorrect fen format', () => {
    expect(fenToArr('test string')).toBeUndefined();
  });

  it('should return undefined for incorrect piecePlacement string', () => {
    expect(fenToArr('r7/p7/8/8/8/7P/7R w KQkq - 0 1')).toBeUndefined();
  });

  it('should return object for correct piecePlacement string', () => {
    expect(fenToArr('r7/p7/8/8/8/8/7P/7R w KQkq - 0 1')).toBeTruthy();
  });

  it('returns correct array from fen string', () => {
    expect(fenToArr('rn6/p7/8/8/8/8/7P/7R w KQkq - 0 1')).toMatchObject(placement_1);
  });

  it('returns starting array from starting fen string', () => {
    expect(fenToArr('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toMatchObject(placement_2);
  });

  it('returns e4 opening array from fen string', () => {
    expect(fenToArr('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1')).toMatchObject(placement_3);
  });
});
