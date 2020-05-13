/*  Constants File
 *
 *  Taylor Lawrence
 *  May 12, 2020
 */

// Number each state
export const AL = 0;
export const AK = 1;
export const AZ = 2;
export const AR = 3;
export const CA = 4;
export const CO = 5;
export const CT = 6;
export const DE = 7;
export const FL = 8;
export const GA = 9;
export const HI = 10;
export const ID = 11;
export const IL = 12;
export const IN = 13;
export const IA = 14;
export const KS = 15;
export const KY = 16;
export const LA = 17;
export const ME = 18;
export const MD = 19;
export const MA = 20;
export const MI = 21;
export const MN = 22;
export const MS = 23;
export const MO = 24;
export const MT = 25;
export const NE = 26;
export const NV = 27;
export const NH = 28;
export const NJ = 29;
export const NM = 30;
export const NY = 31;
export const NC = 32;
export const ND = 33;
export const OH = 34;
export const OK = 35;
export const OR = 36;
export const PA = 37;
export const RI = 38;
export const SC = 39;
export const SD = 40;
export const TN = 41;
export const TX = 42;
export const UT = 43;
export const VT = 44;
export const VA = 45;
export const WA = 46;
export const WV = 47;
export const WI = 48;
export const WY = 49;

// Region names for filters
export const NEW_ENGLAND_TEXT = 'New England';
export const GREAT_LAKES_TEXT = 'Great Lakes';
export const EAST_COAST_TEXT = 'East Coast';
export const SOUTHEAST_TEXT = 'Southeast';
export const GULF_COAST_TEXT = 'Gulf Coast';
export const MIDWEST_TEXT = 'Midwest';
export const TORNADO_ALLEY_TEXT = 'Tornado Alley';
export const ROCKY_MOUNTAINS_TEXT = 'Rocky Mountains';
export const PACIFIC_NORTHWEST_TEXT = 'Pacific Northwest';
export const WEST_COAST_TEXT = 'West Coast';
export const SOUTHWEST_TEXT = 'Southwest';
export const NONCONTIGUOUS_TEXT = 'Noncontiguous States';

export const REGION_TEXT = [
  NEW_ENGLAND_TEXT,
  GREAT_LAKES_TEXT,
  EAST_COAST_TEXT,
  SOUTHEAST_TEXT,
  GULF_COAST_TEXT,
  MIDWEST_TEXT,
  TORNADO_ALLEY_TEXT,
  ROCKY_MOUNTAINS_TEXT,
  PACIFIC_NORTHWEST_TEXT,
  WEST_COAST_TEXT,
  SOUTHWEST_TEXT,
  NONCONTIGUOUS_TEXT
];

// Which state is in which region (states can be in more than one)
export const NEW_ENGLAND = [ME, NH, VT, MA, CT, NH];
export const GREAT_LAKES = [NY, PA, OH, MI, IN, IL, WI];
export const EAST_COAST = [ME, NH, MA, RI, CT, NY, NJ, DE, MD, VA, NC, SC, GA, FL];
export const SOUTHEAST = [VA, WV, KY, TN, AR, LA, MS, AL, GA, NC, SC, FL];
export const GULF_COAST = [FL, AL, MS, LA, TX];
export const MIDWEST = [OH, WV, MI, IN, IL, WI, MN, IA, MO];
export const TORNADO_ALLEY = [TX, OK, KS, NE, SD, ND];
export const ROCKY_MOUNTAINS = [MT, ID, WY, CO, UT, NV];
export const PACIFIC_NORTHWEST = [WA, OR, ID];
export const WEST_COAST = [CA, OR, WA, AK];
export const SOUTHWEST = [CA, AZ, NM, TX];
export const NONCONTIGUOUS = [AK, HI];

export const ALL_REGIONS = {
  [NEW_ENGLAND_TEXT]: NEW_ENGLAND,
  [GREAT_LAKES_TEXT]: GREAT_LAKES,
  [EAST_COAST_TEXT]: EAST_COAST,
  [SOUTHEAST_TEXT]: SOUTHEAST,
  [GULF_COAST_TEXT]: GULF_COAST,
  [MIDWEST_TEXT]: MIDWEST,
  [TORNADO_ALLEY_TEXT]: TORNADO_ALLEY,
  [ROCKY_MOUNTAINS_TEXT]: ROCKY_MOUNTAINS,
  [PACIFIC_NORTHWEST_TEXT]: PACIFIC_NORTHWEST,
  [WEST_COAST_TEXT]: WEST_COAST,
  [SOUTHWEST_TEXT]:SOUTHWEST,
  [NONCONTIGUOUS_TEXT]: NONCONTIGUOUS
};