update betlist set Balance = Amount*-1 where Bet_Result = 'L' AND Balance is NULL;
update betlist set Balance = 0 where Bet_Result = 'NA' AND Balance is NULL;
update betlist set Balance = (Odds - 1) * Amount where Bet_Result = 'W' AND Balance is NULL;

select * from betlist;

SET SQL_SAFE_UPDATES = 0;

update betlist set Match_Result = '13-5' where Match_Name = 'G2 vs SR Map5';

insert into betlist values(null, 'nk1', 'FPX vs T1 Map2', 'FPX Pistol Winner', 10, 3.38, null, null, null);
insert into betlist values(null, 'nk1', 'FPX vs T1 Map2', 'FPX +2.5', 10, 3.38, null, null, null);
insert into betlist values(null, 'nk1', 'FPX vs T1 Map2', 'FPX Winner', 10, 1.96, null, null, null);
insert into betlist values(null, 'nk1', 'PRX vs EDG Map2', 'EDG Pistol Winner', 20, 1.91, null, null, null);
insert into betlist values(null, 'Hecateee', 'Fnatic vs Bilibili Map2', 'Fnatic -5.5', 10, 3.38, null, null, null);


insert into betlist values(null, 'Mcspicy', 'Liquid vs Loud Match', 'Map score 2-1', 20, 3.38, null, null, null);
insert into betlist values(null, 'Mcspicy', 'FPX vs T1 Match', 'Over 2.5', 20, 1.93, null, null, null);
insert into betlist values(null, 'Mcspicy', 'FPX vs T1 Match', 'FPX Winner', 20, 2.33, null, null, null);
insert into betlist values(null, 'Mcspicy', 'FPX vs T1 Map1', 'FPX +2.5', 20, 3.38, null, null, null);
insert into betlist values(null, 'Mcspicy', 'FPX vs T1 Map2', 'FPX +2.5', 20, 1.93, null, null, null);
insert into betlist values(null, 'Mcspicy', 'FPX vs T1 Map3', 'FPX +2.5', 20, 1.93, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs EDG Match', 'Map score 2-0', 20, 2.63, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs EDG Match', 'Map score 2-1', 20, 1.93, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs EDG Map1', 'PRX -2.5', 20, 1.9, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs EDG Map2', 'PRX -2.5', 20, 1.93, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs EDG Map3', 'PRX -2.5', 20, 1.93, null, null, null);



insert into betlist values(null, 'Mcspicy', 'PRX vs KRU Match', 'Over 2.5', 20, 1.92, null, null, null);
insert into betlist values(null, 'Mcspicy', 'PRX vs KRU Match', 'Map score 2-1', 20, 1.86, null, null, null);

insert into betlist values(null, 'Hecateee', 'Saw vs OG Match', 'Over 2.5', 10, 1.92, null, null, null);
insert into betlist values(null, 'Hecateee', 'Saw vs OG Match', 'Map Score 1-2', 10, 1.86, null, null, null);

insert into betlist values(null, 'nk1', 'Many many bets', 'Win', 101.95, 2.00, null, null, null);

update betlist set Match_Result = '0-2' where Match_Name = 'Liquid vs Loud Match' AND Bet_Result is Null;