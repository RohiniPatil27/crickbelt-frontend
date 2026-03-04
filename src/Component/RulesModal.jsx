import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/style.css"; // Ensure this exists and is not empty

const RulesModal = () => {
  const [openSections, setOpenSections] = useState({});
  const navigate = useNavigate();

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const closeModal = () => {
    navigate("/home"); // or whatever route you want
  };

  const dummyRules = [
    {
  id: "horseRacing",
  title: "Horse Racing",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}>
      <strong style={{ color: "#ffd700" }}>General</strong>
      <p>All individual race markets will be determined according to the official result at the time of the weigh-in announcement (or equivalent). Subsequent disqualifications, appeals or amendments to the result will be disregarded.</p>
      <p>If a race is abandoned or otherwise declared void, or in the event of a walkover, all bets on that race will be void.</p>
      <p>If the scheduled venue is changed after the market has been loaded by us, all bets will be void.</p>
      <p>Where a race does not take part on its scheduled day, all bets will be void.</p>
      <p>If a scheduled surface type is changed (e.g., turf to dirt) all bets will stand.</p>

      <strong style={{ color: "#ffd700" }}>Non-Runner Rule</strong>
      <p>Our non-runner rule relates to the adjustment of odds-on bets already matched when a horse in a race is declared a non-runner. To adjust, we apply a reduction factor to the remaining runners...</p>
      <p>Any horse listed when the relevant market is loaded which does not subsequently come under the starters orders is deemed to be a non-runner.</p>
      <p>When the market is loaded each horse is given a reduction factor, based on a forecast price, expressed as a percentage. These may be updated periodically, but after approx. 15 minutes (or 5 minutes for AUS/US races), they’ll only update in exceptional cases.</p>
      <p>Reduction factors may be amended at our discretion throughout the market lifecycle. They apply to both win and place markets but differ per market.</p>
      <p>Matched bets on a non-runner will be voided and the horse removed. Depending on reduction factor thresholds, matched odds and lay offers may be adjusted or canceled.</p>
      <p>If a market goes in-play prematurely and is corrected before the race starts, reduction factors will still apply to those matched during that time.</p>
      <p>If a non-runner is removed in error, we’ll reinstate the runner and matched bets. Any bets between withdrawal and reinstatement will be void.</p>
      <p>If a runner is missing from the market, we may add it later if it’s not a material runner (under 2.5%). If it’s material, the market will be voided and reloaded.</p>

      <strong style={{ color: "#ffd700" }}>How Reductions Are Applied</strong>
      <p><strong>Win Market:</strong> Reductions apply to traded price (e.g., 8.0 becomes 6.0 if 25% reduction).</p>
      <p><strong>Each Way:</strong> Reductions apply to win price, then place terms follow the reduced price.</p>
      <p><strong>Place Market:</strong> Reductions apply to winnings only, not traded price. Odds can't drop below 1.01.</p>

      <strong style={{ color: "#ffd700" }}>Reserves</strong>
      <p>Reserves have non-applicable reduction factors until confirmed runners. If confirmed and later withdrawn, the appropriate reduction factor applies retroactively.</p>

      <strong style={{ color: "#ffd700" }}>Additional Rules</strong>
      <ul>
        <li>Card numbers are just a guide. Bets are on named horses.</li>
        <li>Horses are not coupled.</li>
        <li>If any horse runs for purse money only, it's a non-runner for betting. If that makes the remaining winners equal or more than runners, all bets are void.</li>
      </ul>
    </div>
  ),
},
    {
  id: "handball",
  title: "Handball",
  content: (
     <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>Predict which team will win the match. Bets will be void if the match is not completed (e.g., abandoned or postponed and not resumed within the same day). Overtime is not included unless explicitly stated.</p>

      <strong style={{ color: "#ffd700" }}>Next Goal</strong>
      <p>Predict which team will score the X-th goal (e.g., Next Goal: Team A to score the 15th goal). If the specified goal number is not reached (e.g., match ends early), bets will be void.</p>

      <strong style={{ color: "#ffd700" }}>Highest Scoring Half</strong>
      <p>Predict whether the 1st half or 2nd half will have more goals, or if both halves will have an equal number of goals ("Draw"). Bets are settled on regulation time only and exclude extra time.</p>

      <strong style={{ color: "#ffd700" }}>Halftime/Fulltime</strong>
      <p>Predict the result of the match at halftime and at the end of regulation time. If a match is abandoned or not completed, all bets will be void.</p>
      <p><em>Example:</em> If you choose "1/X", you're betting on the home team to be leading at halftime and the match to end in a draw. Overtime is not included in settlement.</p>
    </>
      </div>
  ),
},
{
  id: "tableTennis",
  title: "Table Tennis",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}>
    <>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>Predict which player will win the match. If any of the named players are replaced before the match starts, all bets will be void. If a match starts but is not completed, all bets will be void.</p>

      <strong style={{ color: "#ffd700" }}>Set Winner</strong>
      <p>The specified set must be completed for bets to stand, unless the outcome of the market has already been determined at the time of suspension or abandonment.</p>

      <strong style={{ color: "#ffd700" }}>Under / Over Points</strong>
      <p>Predict whether the total number of points in the match will be over or under a specified amount. For example, if a game is abandoned at 9-7, bets on Over/Under 16.5 total points are settled as winners or losers respectively, since any natural conclusion to the game would result in at least 18 points.</p>
    </>
    </div>
  ),
},
{
  id: "basketball",
  title: "Basketball",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>Predict which team will be the winner. There must be 5 minutes or less of scheduled game time left for bets to have action.</p>

      <strong style={{ color: "#ffd700" }}>Quarter Winner</strong>
      <p>The quarter must be completed for bets to have action, unless the outcome is already determined.</p>

      <strong style={{ color: "#ffd700" }}>1st Half Winner / 2nd Half Winner</strong>
      <p>The first half must be completed for first half bets to stand. If a game is postponed or cancelled after the start, for full game and second half bets to have action there must be 5 minutes or less remaining, unless the outcome is already determined. (Including Overtime if played.)</p>

      <strong style={{ color: "#ffd700" }}>Highest Scoring Half</strong>
      <p>Predict in which half the most points will be scored. Overtime is not included in the 2nd Half total.</p>
    </></div>
  ),
},
{
  id: "volleyball",
  title: "Volleyball",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>Predict which team will be the winner. Bets will be void if the match is not completed.</p>

      <strong style={{ color: "#ffd700" }}>Set Winner</strong>
      <p>In the event of the set not being completed, bets will be void. Exceptions are made for bets on sets that are already over — in this case, the bets will be settled.</p>
    </></div>
  ),
},
{
  id: "icehockey",
  title: "Ice Hockey",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>Predict the winner of the match including overtime and shootouts. The game must be completed for bets to stand.</p>

      <strong style={{ color: "#ffd700" }}>Period Winner</strong>
      <p>Predict the winner of a specific period. That period must be fully completed for bets to be valid, unless the outcome has already been decided.</p>

      <strong style={{ color: "#ffd700" }}>Highest Scoring Period</strong>
      <p>Predict which period will have the highest total goals. If two or more periods have equal scores, the result is a tie.</p>
    </>
    </div>
  ),
},
{
  id: "football",
  title: "Football",
  content: (
   <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}> <>
      <strong style={{ color: "#ffd700" }}>Bookmaker</strong>
      <p>If the match will not take place within 48 hours of the original kick-off time, bets will be void.</p>
      <p>If the selection is in a multiple bet or accumulator, any refund must be requested before the kick-off of the first leg.</p>
      <p>Where a confirmed postponed match features as part of a multiple bet, the bet will stand on the remaining selections.</p>
      <p>Matches rescheduled well in advance for TV or congestion are not considered postponed.</p>
      <p>If a match is forfeited or awarded without kicking off, all bets will be void.</p>

      <strong style={{ color: "#ffd700" }}>Fancy</strong>
      <p><strong>Tournament Total Goals</strong> and <strong>Team Total Goals FT</strong> count goals in 90 minutes or extra time. Penalty shootout goals do not count.</p>
      <p><strong>Tournament Corners:</strong> Only corners taken in 90 minutes count.</p>
      <p><strong>Tournament Penalties Missed/Converted:</strong> Includes penalties from 90 mins, extra time, and shootouts. Re-taken penalties exclude disallowed attempts.</p>

      <strong style={{ color: "#ffd700" }}>Match</strong>
      <ul>
        <li><strong>Match Odds:</strong> Applies to full regular time including stoppage time. Extra-time and shootouts not included. Bets voided if goal or red card is canceled by VAR after being matched.</li>
        <li><strong>Under/Over Goals:</strong> If the match is abandoned, all bets void unless the outcome is already decided.</li>
        <li><strong>1st Period Winner:</strong> Bets void if the match is abandoned before half-time.</li>
        <li><strong>Next Goal:</strong> Own goals count for the team credited.</li>
        <li><strong>Draw No Bet:</strong> Predict the winner. In case of draw or abandonment, bets are void.</li>
        <li><strong>Both Teams to Score:</strong> Own goals count. Bets void if abandoned unless outcome already determined.</li>
        <li><strong>Total Corners:</strong> Predict team to take a named corner. If specific corner not taken, bet void. E.g., if 8 corners taken before abandonment, bets for 9th+ are void.</li>
        <li><strong>Goals Odd/Even:</strong> 0-0 is even. If team doesn't score, it's even. Bets void if abandoned.</li>
        <li><strong>1X2 Corners:</strong> Predict which team gets more corners. Awarded but untaken corners don’t count. Re-taken corners count once.</li>
        <li><strong>Under/Over Cards:</strong> Cards in 90 mins count. 2 yellows + red = 3 cards. Cards to non-players (managers, subs) excluded. Bets void if abandoned unless outcome decided.</li>
        <li><strong>First Half Under/Over Goals:</strong> Applies to 1st half + stoppage. Extra-time/shootouts not included.</li>
        <li><strong>Penalty Taken?:</strong> Applies to full regular time. Extra-time/shootouts not included.</li>
        <li><strong>Correct Score:</strong> Applies to full regular time only. Fully settled after full-time.</li>
        <li><strong>Team A/B +1/2/3:</strong> Handicap betting applies to full regular time. Extra-time/shootouts excluded.</li>
        <li><strong>HT/FT:</strong> Bets void if match is abandoned. Extra-time/shootouts excluded.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "tennis",
  title: "Tennis",
  content: (
   <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}> <>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>If the 1st set is not completed due to retirement, all bets will be void.</p>

      <strong style={{ color: "#ffd700" }}>Game Winner</strong>
      <p>Predict the winner of a specific game (e.g., 2nd Set, 7th Game). Tie-break points are not counted. Bets will be void if the named game is not completed.</p>

      <strong style={{ color: "#ffd700" }}>Under / Over Games</strong>
      <p>A finished set = valid bet. Example: If the set is abandoned at 4-4, Over 9.5 wins (as the natural finish would be 6-4 or more), Under 9.5 loses, Over 10.5 is void.</p>
    </>
    </div>
  ),
},
{
  id: "snooker",
  title: "Snooker",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>
        Predict which player will win the match. If a match starts but is not completed, the player who progresses to the next round or is awarded the victory will be deemed the winner for settlement. If the match does not start at all, all bets will be refunded.
      </p>

      <strong style={{ color: "#ffd700" }}>Frame Winner</strong>
      <p>
        If the nominated frame is not played, all bets will be void. If the frame is awarded without a shot being played, bets will also be void.
      </p>
    </>
    </div>
  ),
},
{
  id: "egames",
  title: "E-Games",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match</strong>
      <p>
        In the event of a match starting but not being completed, all bets will be void.
      </p>
    </>
    </div>
  ),
},
{
  id: "futsal",
  title: "Futsal",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Match Odds</strong>
      <p>Bets will be void if the match is not completed.</p>

      <strong style={{ color: "#ffd700" }}>Next Goal</strong>
      <p>Predict which team will score the X-th goal.</p>

      <strong style={{ color: "#ffd700" }}>1st Half Winner</strong>
      <p>
        Half bets will be settled at the end of the 1st half. In the event of the 1st half not being completed, bets will be void.
      </p>

      <strong style={{ color: "#ffd700" }}>Highest Scoring Half</strong>
      <p>
        Predict in which event part (1st half or 2nd half) the most goals will be scored.
      </p>
    </>
    </div>
  ),
},
{
  id: "bbl",
  title: "Big Bash League (BBL)",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>General Rules</strong>
      <p>Only the 1st innings is valid for all events unless mentioned otherwise.</p>
      <p>If match is abandoned or overs are reduced, average values will be applied.</p>

      <strong style={{ color: "#ffd700" }}>Average Values (if match abandoned or overs reduced)</strong>
      <ul>
        <li>1st Over Runs: Avg 6</li>
        <li>1st 6 Over Runs: Avg 46</li>
        <li>Total Fours: Avg 25</li>
        <li>Total Sixes: Avg 10</li>
        <li>Total Wickets: Avg 12</li>
        <li>Total Wides: Avg 8</li>
        <li>Total Extras: Avg 14</li>
        <li>Total Fifties: Avg 2</li>
        <li>Total Caught Outs: Avg 8</li>
        <li>Total Bowled Outs: Avg 2</li>
        <li>Total LBW: Avg 1</li>
      </ul>

      <strong style={{ color: "#ffd700" }}>Valid for Both Innings</strong>
      <ul>
        <li>Highest 6 Over Run</li>
        <li>Highest Run in Match</li>
        <li>Highest Fours in Match</li>
        <li>Highest Sixes in Match</li>
        <li>Highest Wickets in Match</li>
        <li>Highest Extras in Match</li>
      </ul>

      <strong style={{ color: "#ffd700" }}>Special Notes</strong>
      <ul>
        <li>Bowler-related events valid only for league stage. Minimum 32 overs must be bowled. If the bowler bowls 1 legal delivery, it counts as 1 over.</li>
        <li>Ground-based averages apply as per the original fixture venue. If venue is changed, averages are given based on original location.</li>
        <li>Super Over is not included. Events based on players not in playing XI will be void. If a player is out of playing XI for 3 matches, the bet is deleted.</li>
      </ul>

      <strong style={{ color: "#ffd700" }}>Sample Ground Averages</strong>
      <ul>
        <li><strong>Bellerive Oval:</strong> Fours Avg 28, Sixes Avg 11, Runs Avg 330</li>
        <li><strong>Manuka Oval:</strong> Fours Avg 24, Sixes Avg 10, Runs Avg 318</li>
        <li><strong>The Gabba:</strong> Fours Avg 24, Sixes Avg 9, Runs Avg 310</li>
        <li><strong>Perth Stadium:</strong> Fours Avg 26, Sixes Avg 12, Runs Avg 340</li>
        <li><strong>Sydney Ground:</strong> Fours Avg 26, Sixes Avg 12, Runs Avg 335</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "lunchFavourite",
  title: "Lunch Favourite",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Definition</strong>
      <p>
        The team which is favourite at lunch or after the last ball of the 1st innings (as per our exchange) will be considered as the Lunch Favourite.
      </p>

      <strong style={{ color: "#ffd700" }}>Rules</strong>
      <ul>
        <li>If the favourite is clear at lunch, that team will be considered as Lunch Favourite.</li>
        <li>If the 1st innings is completed before lunch, the team favourite after the last ball of 1st innings is Lunch Favourite.</li>
        <li>In case of overs being reduced, the team favourite at lunch will be considered the Lunch Favourite.</li>
        <li>In case of a tie (in T20 or One Day), all Lunch Favourite bets will be void.</li>
        <li>Management decision will be final in all circumstances.</li>
      </ul>

      <strong style={{ color: "#ffd700" }}>Examples</strong>
      <ul>
        <li><strong>Example 1:</strong> If a match is reduced to 18 overs per side, the team that is favourite at lunch after 18 overs is Lunch Favourite.</li>
        <li><strong>Example 2:</strong> If in a T20 match rain interrupts play at 14 overs and a direct target is set for the 2nd innings, then the team which is favourite in Match Odds after the target is set is the Lunch Favourite.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "politicsAssembly",
  title: "Politics",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>Indian State Legislative Assembly Elections</strong>
      <ul>
        <li>This event pertains to predicting the winner of various legislative assemblies in India.</li>
        <li>The final result declared by the Election Commission of India will be considered official and valid for settlement.</li>
        <li>All bets will be voided if elections do not occur within the scheduled time as per the Election Commission or by management decision of our exchange.</li>
        <li>The company reserves the right to suspend or void bets at any time if the outcome is deemed uncertain or illegitimate.</li>
        <li>Accidental or irregular incidents during elections will not affect settlement. Additional candidates may be added upon request.</li>
        <li>No candidates will be partially settled. All positions will remain active until the market is fully settled to ensure trading continuity.</li>
        <li>Live transmissions may be delayed due to technical or logistical issues. Customers should factor this into their decisions.</li>
        <li>If any candidate withdraws for any reason, including death, all bets on that market will remain valid and be settled according to standard rules.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "bookmakerRules",
  title: "Bookmaker",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700" }}>General Rules</strong>
      <ul>
        <li>We are not concerned if any team gains an advantage or disadvantage due to any reason.</li>
        <li>The company reserves the right to suspend or void any ID/bets if found to be illegitimate (e.g. VPN use, robots, multiple entries from the same IP, simultaneous multiple bets "Punching", etc.). <strong>Note: Only winning bets will be voided.</strong></li>
      </ul>

      <strong style={{ color: "#ffd700" }}>ODI (25 Over Comparison)</strong>
      <p>We will compare both teams’ scores after 25 overs. The team with the higher score will be declared the winner.</p>

      <strong style={{ color: "#ffd700" }}>T20 (10 Over Comparison)</strong>
      <p>We will compare both teams’ scores after 10 overs. The team with the higher score will be declared the winner.</p>

      <strong style={{ color: "#ffd700" }}>Dispute Resolution</strong>
      <p>Any queries about results or rates must be raised within 7 days of the event. Issues raised beyond this period will not be considered.</p>

      <strong style={{ color: "#ffd700" }}>Equal Points Rule</strong>
      <p>If two teams end with equal points, the official point table will determine the result.</p>

      <strong style={{ color: "#ffd700" }}>Tennis – Advance Fancy Market</strong>
      <p>If the second set is not completed, all bets regarding this market will be voided.<br />
         If a player retires after completing the second set, the market will be settled as three sets played.</p>

      <strong style={{ color: "#ffd700" }}>Virtual Cricket</strong>
      <p>If the video is interrupted or stopped due to technical issues, the bookmaker market will be voided and cannot be continued.</p>
    </>
    </div>
  ),
},
{
  id: "teenPatti",
  title: "Teen Patti",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <p>No records found.</p>
    </>
    </div>
  ),
},
{
  id: "cricketcasino",
  title: "Cricket Casino",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <p>1. Completed game is valid. In case overs are reduced or the match is abandoned due to rain, that particular game will be deleted.</p>
      <p>2. Helmet penalty runs will be counted; other types of penalty runs will not be considered in our exchange.</p>
      <p>3. In any circumstances, management decision will be final.</p>
      <p>4. The last digit of runs in all games will be valid in our exchange.</p>
      <p>5. <strong>Single Last Digit Game:</strong></p>
      <p>5.1 For example: 6 over run IND = 47 runs → Result = 7</p>
      <p>6. <strong>Double Last Digit Game:</strong></p>
      <p>6.1 For example: 6 over run & 10 over run IND = 45 & 83 runs → Result = 53</p>
      <p>7. <strong>Triple Last Digit Game:</strong></p>
      <p>7.1 For example: 6, 10, and 15 over runs IND = 43, 80 & 125 → Result = 305</p>
      <p>7.2 Alternate Example: 6 over, 10 over & Lambi run IND = 43, 80 & 187 → Result = 307</p>
    </>
    </div>
  ),
},
{
  id: "fancymarket",
  title: "Fancy Market 1",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Even Odd Game Betting Rules</strong>
      <p>1.1 Completed game is valid. If match is reduced due to rain or abandoned, the particular game will be deleted.</p>
      <p>1.2 All Odd/Even bets on players/partnerships are valid if at least one legal delivery is bowled. Otherwise, bets are void.</p>
      <p>1.3 Bets on Odd/Even sessions will be void if the session is not completed.</p>
      <p>1.4 Management decision is final in all cases.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Top Batsman Rules</strong>
      <p>2.1 If a player is not in the playing XI, bets will be void.</p>
      <p>2.2 If two players score the same top run, payout is 50% for each based on their respective odds.</p>
      <p>2.3 Only 1st innings is valid. 50 overs for ODI and 20 overs for T20 must be played or all bets are void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Man of the Match Rules</strong>
      <p>1. Bets are void if match is abandoned or reduced.</p>
      <p>2. Bets void if player not in playing 11.</p>
      <p>3. If MOM is shared, settlement is 50% each as per Dead Heat Rule.</p>
      <p>4. Same rules apply as Top Batsman.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Maximum Sixes by Team</strong>
      <p>1. Bets void if match is abandoned or reduced.</p>
      <p>2. Void if both teams hit same number of sixes.</p>
      <p>3. Super over is not considered.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Maximum 6/10 Over Runs</strong>
      <p>1. Bets void if match is abandoned or reduced.</p>
      <p>2. Bets void if both teams score same runs.</p>
      <p>3. Valid for 1st 6 overs (T20) & 10 overs (ODI) of both innings.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Batsman Match</strong>
      <p>1. Bets void if either batsman not in playing XI.</p>
      <p>2. Void unless both batsmen face at least one ball.</p>
      <p>3. Void if match is abandoned or overs reduced.</p>
      <p>4. Void if both batsmen score same runs. Both innings valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Opening Pair</strong>
      <p>1. Total runs of opening pair will be compared. Higher wins.</p>
      <p>2. Both innings valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Our Exchange Special</strong>
      <p>1. Player not in playing XI → bets void.</p>
      <p>2. Match abandoned/overs reduced → bets void.</p>
      <p>3. Both innings valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Direction of First Boundary</strong>
      <p>1. Batsman must be in playing 11 or bets are void.</p>
      <p>2. Match abandoned/reduced → void.</p>
      <p>3. Off side = off side four, leg side = leg side four.</p>
      <p>4. Extras not counted. Only 1st inning valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Fifty & Century by Batsman</strong>
      <p>1. Bets void if match abandoned/reduced.</p>
      <p>2. Batsman not in playing 11 → bets void.</p>
      <p>3. Must face one legal ball. Both innings valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>1st Over Fancy</strong>
      <p>1. Extras not considered. Only 1st inning valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Odd Even Fancy</strong>
      <p>1. Incomplete games or reduced overs = void bets.</p>
      <p><em>Example:</em> 275 SL must be played full 50 overs or bets will be deleted.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Next Man Out</strong>
      <p>1. Both innings valid. Player not in opening = void bets.</p>
      <p>2. Match reduced or abandoned = void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Caught Out</strong>
      <p>1. Fancy in both innings valid. Match abandoned/reduced = void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Wkt & All Out Fancy</strong>
      <p>1. Fancy: 5 wkts in 10 overs & all out in 20 overs.</p>
      <p>2. Both innings valid. Match abandoned/reduced = void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Test Match: Game Completed Fancy</strong>
      <p>1. Fancy to decide match completion per session.</p>
      <p>2. If match drawn → all session bets are lost.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Meter Fancy</strong>
      <p>1. If match reduced/abandoned, midpoint rule applies.</p>
      <p><em>Example:</em> Dhoni meter 75/77 → result is 76.</p>
      <p>Single difference → higher side (e.g., 53/54 = 54).</p>
      <p>For Test lambi/inning meter, 70 overs must be played.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Maximum Boundaries</strong>
      <p>1. If number of 4s or 6s equal → bets voided.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Khado (Test)</strong>
      <p>1. Minimum 70 overs must be played by the team.</p>
      <p>2. Else Khado bets will be voided.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Common Market</strong>
      <p>1. If match/series canceled due to COVID/natural disasters → settlement = opening rate vs present rate.</p>
      <p>2. Company reserves final decision rights.</p>

      <p><strong>Note:</strong> Common = Only 1 Win</p>
    </>
    </div>
  ),
},
{
  id: "footballFancy",
  title: "Football Fancy",
  content: (
   <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <p>All bets will be settled on the official result declared by the football governing body.</p>
      <p>If a match is abandoned or postponed and not played within 24 hours, all bets will be voided.</p>
      <p>Extra time and penalties are only considered if specifically mentioned in the market.</p>
      <p>Only goals, fouls, and corners that occur during regular play (90 minutes + stoppage time) are valid unless stated.</p>
      <p>If any player mentioned in a fancy does not start the match, all related bets will be void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>First Goal Scorer</strong>
      <p>If the player scores first, the bet is valid. If the player does not start the match or does not score first, the bet is void. Own goals do not count.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Both Teams to Score (BTTS)</strong>
      <p><strong>Yes:</strong> If both teams score at least once during the match.</p>
      <p><strong>No:</strong> If either team fails to score.</p>
      <p><em>Note:</em> Extra time not included.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Over/Under Goals</strong>
      <p>Predict if the total number of goals in the match will be over or under a specified number (e.g., Over 2.5 goals).</p>
      <p><em>Note:</em> Extra time not included.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Corner Fancy</strong>
      <p>Total corners for either team or both teams combined.</p>
      <p>If match is abandoned before 90 minutes, all corner bets will be void.</p>
      <p>Only corners taken count (not just awarded).</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Card Fancy (Yellow/Red)</strong>
      <p>Only cards shown to players on the field count.</p>
      <p>2 yellow cards = 1 red card, but total cards will be counted as 2.</p>
      <p>If a match is abandoned, all bets are void unless outcome is already determined.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Next Goal</strong>
      <p>Predict which team will score the next goal.</p>
      <p>If the match ends without the next goal being scored, bets are void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Correct Score</strong>
      <p>Predict the exact score of the match.</p>
      <p>If the match is abandoned, all bets are void.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Odd/Even Goals</strong>
      <p>Predict if the total number of goals scored will be an odd or even number.</p>
      <p>0 goals = Even.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Dispute Resolution</strong>
      <p>Any queries about football betting results must be raised within 7 days. Decisions beyond this time frame will not be reconsidered.</p>
    </>
    </div>
  ),
},
{
  id: "ipl",
  title: "Indian Premier League (IPL)",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <p>If the IPL fixture of 74 matches gets reduced due to any reason, all special fancies will be voided. (Match abandonment due to rain/bad light will not be considered in this.)</p>
      <p>Management decision will be final in any case.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Abandoned/Over-Reduced Match Averages (1st Innings Only Where Applicable)</strong>
      <ul>
        <li>Total 1st Over Runs – Avg: 5</li>
        <li>Total 1st 6 Over Runs – Avg: 46</li>
        <li>Total Fours – Avg: 25</li>
        <li>Total Sixes – Avg: 13</li>
        <li>Total Wickets – Avg: 12</li>
        <li>Total Wides – Avg: 8</li>
        <li>Total Extras – Avg: 17</li>
        <li>Total Fifties – Avg: 2</li>
        <li>Total Caught Outs – Avg: 8</li>
        <li>Total Bowled Outs – Avg: 2</li>
        <li>Total LBW – Avg: 1</li>
        <li>Total Run Outs – Avg: 1</li>
        <li>Total No Balls – Avg: 1</li>
      </ul>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Result Validity</strong>
      <p>If a result is already declared based on available data/rates before match or tournament cancellation, it will be considered valid.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Tournament-Based Fancies</strong>
      <ul>
        <li>Match Wins by Team – League stage only. Playoffs not included.</li>
        <li>Most 4s by Individual Batsman (Tournament): E.g. R Gaikwad - 64 Fours in 2021.</li>
        <li>Most 4s in One Inning by Batsman: E.g. S Yadav - 13 Fours.</li>
        <li>Most 6s by Individual Batsman (Tournament): E.g. KL Rahul - 30 Sixes.</li>
        <li>Most 6s in One Inning by Batsman: E.g. K Pollard - 8 Sixes.</li>
        <li>Most Runs Conceded by Bowler in One Inning: E.g. L Ngidi - 62 runs in 4 overs.</li>
        <li>Most Wickets by Bowler in One Inning: E.g. H Patel - 5 Wickets.</li>
        <li>Most 50s by Individual Batsman (Tournament): E.g. Faf du Plessis - 6 Fifties.</li>
        <li>Highest Match Aggregate Runs: E.g. RR vs PBKS – 438 runs total.</li>
      </ul>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Per-Match Based Fancies</strong>
      <ul>
        <li>Highest Innings Run – Both innings valid.</li>
        <li>Lowest Innings Run – Only 1st innings valid.</li>
        <li>Highest Over Run – Both innings valid.</li>
        <li>Highest 1st Over Run in a Match – Only 1st innings valid.</li>
        <li>Highest Fours/Sixes/Extras/Wickets in a Match – Both innings valid.</li>
        <li>Highest 6 Over Run – Both innings valid.</li>
      </ul>

      <p><strong>Note:</strong> Super Over will NOT be considered in any market.</p>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Fastest Fifty Rule</strong>
      <p>Only the first 50 runs are counted. For example, if a batsman scores 50 in 17 balls and then reaches 100 in 31 balls, the valid count is 17 balls for the fastest 50.</p>
    </>
    </div>
  ),
},
{
  id: "kabaddi",
  title: "Kabaddi",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <ul>
        <li>In all circumstances, the management's decision will be final regarding all fancies of Kabaddi on our exchange.</li>
        <li>All fancy bets will be valid even if the match ends in a tie.</li>
        <li>The result of individual player-related fancies will be valid only if the player participates in the match.</li>
        <li>If any fancy is given at a wrong rate, all related bets will be deleted.</li>
        <li>For Playoffs, only the result from the official 40 minutes of two halves will be considered valid. Extra time or golden raids will not be included.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "worldCup",
  title: "World Cup",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <ul>
        <li>In case of any circumstances, management decision will be final for all the fancies under World Cup.</li>
        <li>WC = World Cup, MOM = Man of the Match.</li>
        <li>If the World Cup fixture of 48 matches gets reduced, all special fancies will be voided (except rain/bad light-related cases).</li>
        <li>Super Over will NOT be included in any fancy calculation.</li>
        <li>Once a result is declared based on valid rates, it will stand even if the tournament is cancelled later.</li>
      </ul>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Match-Specific Fancies</strong>
      <ul>
        <li>All below apply to 1st innings only unless stated otherwise.</li>
        <li><strong>1st Over Run:</strong> Avg 4 runs if match abandoned or incomplete.</li>
        <li><strong>Highest/Lowest Inning Run:</strong> 1st innings only.</li>
        <li><strong>Total Fours/Sixes/Wickets/Wides/Extras:</strong> Averages used if match reduced.</li>
        <li><strong>Total Fifties/Centuries/Run Outs/Ducks/Caught Outs:</strong> Averages apply if incomplete.</li>
        <li><strong>Total Match 1st Over Dot Ball:</strong> Avg 4 runs default.</li>
        <li><strong>Match 1st 10 Over Runs:</strong> Avg 50 if abandoned.</li>
        <li><strong>Total Maidens:</strong> Avg 4 maidens.</li>
        <li><strong>50+ Partnerships:</strong> Avg 3 valid if 50 or more.</li>
        <li><strong>Highest 1st Over Run:</strong> 1st innings only.</li>
        <li><strong>Highest Fours/Sixes/Wickets/Extras/Over Score:</strong> Both innings valid.</li>
        <li><strong>Highest Run Scorer/Wicket Taker:</strong> Tournament total.</li>
        <li><strong>Fastest 50/100:</strong> Only 1st 50/100 balls considered.</li>
        <li><strong>Bowled/LBW:</strong> Avg: 3 bowled, 2 LBW if incomplete.</li>
        <li><strong>Highest 1st 10 Overs Run:</strong> 1st innings only.</li>
      </ul>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Player & Team Fancies</strong>
      <ul>
        <li>Only valid for league stage (9 matches).</li>
        <li>If a player misses first 3 matches → all bets voided.</li>
        <li>If ruled out mid-way → bets after last match played will be deleted.</li>
        <li>Player must face one legal ball or bowl one legal delivery to be valid.</li>
        <li>Team-based averages apply in case of abandonment.</li>
      </ul>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>Team-Wise Averages</strong>
      <p><strong>ENG:</strong> 295r | 56 (10 over) | 25 4s | 7 6s | 44 wkts</p>
      <p>J Roy: 38r, Bairstow: 43r, Root: 43r | Archer/Woakes/Rashid: 2w</p>

      <p><strong>IND:</strong> 285r | 53 (10 over) | 26 4s | 6 6s | 41 wkts</p>
      <p>Dhawan: 38r, R Sharma: 43r, Kohli: 48r | Bumrah/Shami/Kuldeep: 2w</p>

      <p><strong>AUS:</strong> 280r | 52 (10 over) | 26 4s | 6 6s | 40 wkts</p>
      <p>Warner: 43r, Finch: 38r, Smith: 42r | Starc/Cummins/Zampa: 2w</p>

      <p><strong>SA:</strong> 270r | 51 (10 over) | 24 4s | 5 6s | 37 wkts</p>
      <p>Amla: 38r, Du Plessis: 39r, De Kock: 36r | Tahir/Rabada/Steyn: 2w</p>

      <p><strong>NZ:</strong> 275r | 50 (10 over) | 25 4s | 5 6s | 37 wkts</p>
      <p>Munro: 32r, Guptill: 38r, Williamson: 45r | Boult: 2w</p>

      <p><strong>WI:</strong> 270r | 49 (10 over) | 23 4s | 7 6s | 35 wkts</p>
      <p>Gayle: 37r, Lewis/Bravo: 32r, Hope: 37r | Roach/Cottrell/Holder/Nurse: 1w</p>

      <p><strong>PAK:</strong> 270r | 50 (10 over) | 24 4s | 5 6s | 36 wkts</p>
      <p>Imam: 36r, Babar: 44r, Fakhar: 34r | Hasan/Shadab/Shaheen: 2w</p>

      <p><strong>SL:</strong> 250r | 48 (10 over) | 22 4s | 4 6s | 32 wkts</p>
      <p>Karunaratne: 31r, Thirimanne: 29r, Mendis: 33r | Malinga/Lakmal/Vandersay: 1w</p>

      <p><strong>BAN:</strong> 245r | 48 (10 over) | 22 4s | 4 6s | 32 wkts</p>
      <p>T Iqbal: 34r, Sarkar: 29r, M Rahim: 31r | M Hasan/M Rahman/Mortaza: 1w</p>

      <p><strong>AFG:</strong> 235r | 46 (10 over) | 20 4s | 4 6s | 28 wkts</p>
      <p>Shah: 27r, Zazai: 26r, Shahzad: 27r | D Zadran/Mujeeb: 1w, Rashid: 2w</p>
    </>
    </div>
  ),
},
{
  id: "khado",
  title: "Khado",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <ul>
        <li>Only <strong>First Innings</strong> is valid for both T20 and One Day matches.</li>
        <li>This event functions the same way as <strong>Lambi</strong>.</li>
        <li>If the match is <strong>abandoned</strong> or <strong>overs are reduced</strong>, all bets will be <strong>deleted</strong>.</li>
        <li>You can <strong>choose your own value</strong> in this event.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "election",
  title: "Lok Sabha Election",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <ul>
        <li>
          The <strong>final result</strong> declared by the <strong>Election Commission of India</strong> for the <strong>Lok Sabha Election 2019</strong> will be considered valid in our exchange.
        </li>
        <li>
          Any <strong>accidental issues</strong> occurring during the Lok Sabha Election 2019 will <strong>not</strong> be counted in our exchange.
        </li>
      </ul>
    </>
      </div>
  ),
},
{
  id: "fancy",
  title: "Fancy Market Rules",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules</strong>
      <ul>
        <li>In any circumstances, <strong>management decision will be final</strong> related to all fancy bets of our exchange.</li>
        <li>All fancy bets will be <strong>validated when the match is tied</strong>.</li>
        <li>The result of an <strong>individual player in fancy</strong> will be valid only if the player plays in the match.</li>
        <li>If any <strong>wrong rate</strong> has been given in a fancy, that particular bet will be <strong>deleted</strong>.</li>
        <li>For <strong>playoffs</strong>, the <strong>final result of 40 minutes</strong> (two halves) will be valid in our exchange.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "match",
  title: "Match Rules",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <strong style={{ color: "#ffd700", fontSize: "16px" }}>General Rules by Sport</strong>
      <ul>
        <li><strong>TENNIS Match Odds:</strong> If the 1st set is not completed at the time of retirement or disqualification, all bets related to that match will be void.</li>
        <li><strong>FOOTBALL Match Odds:</strong> All bets apply to the full regular time including stoppage time. Extra-time and penalties are not included. For goals cancelled by VAR, bets matched between the time of the goal and the VAR decision will be voided. For red cards cancelled by VAR, bets matched after the VAR review started will be voided.</li>
        <li><strong>FOOTBALL Under/Over Goals:</strong> If a match starts but is not completed, all bets will be void unless the market outcome was already determined.</li>
        <li><strong>BADMINTON Match Odds:</strong> Predict which player will win. If any player is replaced before the match starts, all bets will be void. If the match starts but is not completed, bets will also be void.</li>
        <li><strong>BADMINTON Set Winner:</strong> The set must be fully completed for bets to stand, unless the outcome has already been determined.</li>
      </ul>

      <strong style={{ color: "#ffd700", fontSize: "16px" }}>All Sports</strong>
      <ul>
        <li>The company reserves the right to <strong>void/suspend any ID or bets</strong> if found to be illegitimate (e.g., VPN, bot usage, multiple entries from same or different IPs).</li>
        <li><strong>Note:</strong> Only <strong>winning bets will be voided</strong> in case of illegitimate activity.</li>
      </ul>
    </>
    </div>
  ),
},
{
  id: "binary",
  title: "Binary Session Rules",
  content: (
    <div style={{
      border: '2px solid #fff',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      color: '#000',
      fontSize: '15px',
      lineHeight: '1.6'
    }}><>
      <p><strong style={{ color: "#ffd700" }}>Session Price & Settlement:</strong></p>
      <ul>
        <li>All session bets will be confirmed at <strong>market rate only</strong>.</li>
        <li>Session settlement prices (results) are based on the <strong>official exchange</strong> settlement after market close.</li>
        <li>Each product has two price types: <strong>SPOT</strong> and <strong>FUTURE</strong>. We provide only <strong>near-month FUTURE</strong> prices in Binary Session.</li>
        <li>Verify settlement from the product's <strong>official website</strong>.</li>
      </ul>

      <p><strong style={{ color: "#ffd700" }}>Session Timings:</strong></p>
      <ul>
        <li><strong>NFY, B-NFY, AXS, ICI, RIL, SBI, TT STL:</strong> Mon–Fri, 10:00 a.m. to 2:30 p.m.</li>
        <li><strong>GOLD, SILVER, CRUDE:</strong> Mon–Fri, 11:30 a.m. to 10:30 p.m.</li>
        <li><strong>CMX CRUDE, DOWJONES, NASDAQ, SNP:</strong> Mon–Fri, 7:30 p.m. to 12:00 a.m.</li>
      </ul>

      <p><strong style={{ color: "#ffd700" }}>Rules & Restrictions:</strong></p>
      <ul>
        <li>Same bets at the same time from <strong>multiple IDs are strictly prohibited</strong>.</li>
        <li><strong>Operating/market-making bets</strong> (e.g., cheating, line, chamka bets) are strictly not allowed.</li>
        <li>If a <strong>wrong rate</strong> is provided in any fancy, the affected bets will be <strong>cancelled</strong>.</li>
        <li><strong>Deleted bets</strong> will be removed within 24 hours and clients will be notified.</li>
      </ul>
    </>
    </div>
  ),
}
  ];

  return (
    <div style={{
      backgroundColor: "black",
      padding: "20px",
      borderRadius: "8px",
      color: "#000",
      maxWidth: "1400px",
      margin: "20px auto",
      border: "1px solid #ddd",
      boxShadow: "0 4px 12px black",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{color:"#ffd700"}}>Rules</h2>
        <button onClick={closeModal} style={{ fontSize: "18px", border: "none", background: "red", cursor: "pointer" }}>✖</button>
      </div>
      {dummyRules.map(({ id, title, content }) => (
        <div key={id} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => toggleSection(id)}
            style={{
              fontWeight: "bold", 
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              marginBottom: "5px"
            }}
          >
            {title}
          </div>
          {openSections[id] && (
            <div style={{ paddingLeft: "10px", color: "white" }}>
              {content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RulesModal;
