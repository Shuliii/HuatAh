update betlist set Balance = Amount*-1 where Bet_Result = 'L';
update betlist set Balance = 0 where Bet_Result = 'NA';
update betlist set Balance = (Odds - 1) * Amount where Bet_Result = 'W';

select * from betlist;