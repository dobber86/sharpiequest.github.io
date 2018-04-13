app.service('playerStats', function() {
    
    var username = "",
        hp = 15,
        maxhp = 15,
        mp = 10,
        maxmp = 10,
        power = 3,
        resistance = 3,
        accuracy = 85,
        insight = 85,
        specialpower = 3,
        xp = 1,
        level = 1,
        money = 0;

    this.saveUsername = function(dbusername, dbhp, dbmhp, dbmp, dbmmp, dbpow, dbres, dbacc, dbins, dbspe, dbxp, dblvl, dbmon) {
        username = dbusername,
        hp = dbhp,
        maxhp = dbmhp,
        mp = mp,
        maxmp = dbmmp,
        power = dbpow,
        resistance = dbres,
        accuracy = dbacc,
        insight = dbins,
        specialpower = dbspe,
        xp = dbxp,
        level = dblvl,
        money = dbmon
    }

    this.saveCombatUpdate = function(cHp, cMp, cXp, cLvl) {
        hp = cHp,
        mp = cMp,
        xp = cXp,
        level = cLvl
    }

    this.getUsername = function() {
        return username;
    }

    this.getHp = function() {
        return hp;
    }

    this.getMaxHp = function() {
        return maxhp;
    }

    this.getMp = function() {
        return mp;
    }

    this.getMaxMp = function() {
        return maxmp;
    }

    this.getPower = function() {
        return power;
    }

    this.getResistance = function() {
        return resistance;
    }

    this.getAccuracy = function() {
        return accuracy;
    }

    this.getInsight = function() {
        return insight;
    }

    this.getSpecialPower = function() {
        return specialpower;
    }

    this.getXp = function() {
        return xp;
    }

    this.getLevel = function() {
        return level;
    }

    this.getMoney = function() {
        return money;
    }
});