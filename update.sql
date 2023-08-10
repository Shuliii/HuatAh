update betlist set Balance = Amount*-1 where Bet_Result = 'L' AND Balance is NULL;
update betlist set Balance = 0 where Bet_Result = 'NA' AND Balance is NULL;
update betlist set Balance = (Odds - 1) * Amount where Bet_Result = 'W' AND Balance is NULL;

select * from betlist where Username = 'Mcspicy';

SET SQL_SAFE_UPDATES = 0;

update betlist set Match_Result = '13-5' where Match_Name = 'G2 vs SR Map5';

insert into betlist values(null, 'nk1', 'Fnatic vs Bilibili Map1', 'Bilibili +5.5', 20, 3.38, null, null, null);
insert into betlist values(null, 'nk1', 'Fnatic vs Bilibili Map1', 'Bilibili Winner', 5, 3.38, null, null, null);
insert into betlist values(null, 'nk1', 'Fnatic vs Bilibili Map2', 'Bilibili +5.5', 20, 1.96, null, null, null);
insert into betlist values(null, 'nk1', 'Fnatic vs Bilibili Map2', 'Bilibili Winner', 5, 3.38, null, null, null);
insert into betlist values(null, 'Hecateee', 'Fnatic vs Bilibili Map2', 'Fnatic -5.5', 10, 3.38, null, null, null);


insert into betlist values(null, 'Mcspicy', 'EDG vs Giants Match', 'KRU +3.5', 20, 3.38, null, null, null);
insert into betlist values(null, 'Mcspicy', 'EDG vs Giants Map1', 'KRU +3.5', 20, 1.93, null, null, null);
insert into betlist values(null, 'Mcspicy', 'EDG vs Giants Map1', 'KRU Winner', 20, 2.33, null, null, null);
insert into betlist values(null, 'Mcspicy', 'EDG vs Giants Map2', 'KRU +3.5', 20, 3.38, null, null, null);
insert into betlist values(null, 'Mcspicy', 'EDG vs Giants Map2', 'KRU Winner', 20, 1.93, null, null, null);


insert into betlist values(null, 'Mcspicy', 'PRX vs KRU Match', 'Over 2.5', 20, 1.92, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs KRU Match', 'Map score 2-1', 20, 1.86, null, null, null);

insert into betlist values(null, 'Hecateee', 'Saw vs OG Match', 'Over 2.5', 10, 1.92, null, null, null);
insert into betlist values(null, 'Hecateee', 'Saw vs OG Match', 'Map Score 1-2', 10, 1.86, null, null, null);

insert into betlist values(null, 'nk1', 'Many many bets', 'Win', 101.95, 2.00, null, null, null);

update betlist set Match_Result = '' where Match_Name = '' AND Bet_Result is Null;