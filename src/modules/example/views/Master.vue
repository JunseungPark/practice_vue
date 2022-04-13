<template>
  <div class="rankingWrap">
    <div class="ranking-head">
        <h3 class="ranking-title">RANKING</h3>
        <button class="ranking-category-slide" type="button">
            <span class="ranking-category">
                <ul>
                    <li class="show">Goals</li>
                    <li>Assists</li>
                    <li>Points per Game</li>
                </ul>
            </span>
            <!-- <img class="ranking-category-btn" src="../assets/img/categoryArrow.svg" alt="화살표 이미지"> -->
        </button>
    </div>
    <div class="ranking-slider-wrap">
        <div class="ranking-slider-inner">
            <div class="rankingCont goals">
                <div class="ranking">
                    <div class="rpImgWrap">
                        <img id="gRankingPlayerImg1" src="/" alt="선수1 이미지">
                    </div>
                    <div class="rankingPlayerDesc">
                        <span class="rankingNum">1</span>
                        <div class="rankingPlayer">
                            <div class="rankingPlayerName">
                                <span class="rpnF">First Name</span>
                                <span class="rpnL">Last Name</span>
                            </div>
                            <div class="rankingPlayerAchieve goals">Goals : <span></span></div>
                            <div class="rankingPlayerInfo">
                                <span class="rankingPlayerNum">No.<em>11</em></span>
                                <span class="rankingPlayerTeam">team</span>
                            </div>
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Master.ts"></script>
