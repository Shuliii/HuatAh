update betlist set Balance = Amount*-1 where Bet_Result = 'L' AND Balance is NULL;
update betlist set Balance = 0 where Bet_Result = 'NA' AND Balance is NULL;
update betlist set Balance = (Odds - 1) * Amount where Bet_Result = 'W' AND Balance is NULL;

select * from betlist;

SET SQL_SAFE_UPDATES = 0;

update betlist set Match_Result = '13-5' where Match_Name = 'G2 vs SR Map5';

insert into betlist values(null, 'Mcspicy', 'Forze vs L4D Match', 'Map Score 2-1', 50, 3.38, null, null, null);
insert into betlist values(null, 'nk1', 'Forze vs L4D Match', 'Map Score 2-1', 10, 3.38, null, null, null);