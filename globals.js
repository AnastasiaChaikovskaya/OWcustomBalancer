/*
*		Global variables
*/

var lobby = [];

// // players in teams (flat array) - for classic balancer
var team1 = [];
var team2 = [];

// players in teams by roles - for role locked balancer
var team1_slots = {};
var team2_slots = {};

// multi-team balancer state (N teams of 5: 1 tank, 2 dps, 2 supports)
// each element: { tank:[player], dps:[p,p], support:[p,p] }
var multi_teams = [];
// players left over when activePlayers.length % 5 != 0
var multi_lobby_leftovers = [];
var multi_last_meta = { team_count: 0, of_value: 0, off_role_count: 0, warnings: [] };

// id's of pinned players. Those are not moving to lobby when team is cleared
var pinned_players = new Set();

// id's of checked-in players
var checkin_list = new Set();

// reference to temporary empty player object for new added player for loading stats
var player_being_added;
// reference to player object for edit dialog
var player_being_edited;

// timer for applying lobby filter on user input
var lobby_filter_timer = 0;

// global settings object
var Settings = {};
const storage_prefix = "owcgb_";

var ExportOptions = {};

// class icons in data:url strings
var class_icons_datauri = {};
var rank_icons_datauri = {};

// worker for executing balancer in dedicated thread
var BalanceWorker = undefined;
