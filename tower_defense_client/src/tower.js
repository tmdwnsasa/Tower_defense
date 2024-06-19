export class Tower {
  constructor(x, y, cost, image) {
    // 생성자 안에서 타워들의 속성을 정의한다고 생각하시면 됩니다!
    this.x = x; // 타워 이미지 x 좌표
    this.y = y; // 타워 이미지 y 좌표
    this.width = 78; // 타워 이미지 가로 길이 (이미지 파일 길이에 따라 변경 필요하며 세로 길이와 비율을 맞춰주셔야 합니다!)
    this.height = 150; // 타워 이미지 세로 길이
    this.attackPower = 40; // 타워 공격력
    this.range = 300; // 타워 사거리
    this.cost = cost; // 타워 구입 비용
    this.cooldown = 0; // 타워 공격 쿨타임
    this.beamDuration = 0; // 타워 광선 지속 시간
    this.target = null; // 타워 광선의 목표
    this.image = image;
    this.isUpgraded = false; // 업그레이드 여부
  }

  draw(ctx) {
    if (this.image.complete && this.image.naturalHeight !== 0) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      console.error('Image not loaded or broken:', this.image.src);
    }
    if (this.beamDuration > 0 && this.target) {
      ctx.beginPath();
      ctx.moveTo(this.x + this.width / 2, this.y + this.height / 2);
      ctx.lineTo(
        this.target.x + this.target.width / 2,
        this.target.y + this.target.height / 2
      );
      ctx.strokeStyle = this.isUpgraded ? "yellow" : "skyblue"; // 업그레이드 여부에 따라 광선 색상 변경
      ctx.lineWidth = 10;
      ctx.stroke();
      ctx.closePath();
      this.beamDuration--;
    }
  }

  attack(monster) {
    if (this.cooldown <= 0) {
      monster.hp -= this.attackPower;
      this.cooldown = 60;
      this.beamDuration = 30;
      this.target = monster;
    }
  }

  updateCooldown() {
    if (this.cooldown > 0) {
      this.cooldown--;
    }
  }

  upgrade() {
    this.attackPower *= 1.5;
    this.range *= 1.2;
    this.isUpgraded = true; // 업그레이드 상태로 변경
  }

  getRefundAmount() {
    return this.isUpgraded ? this.cost + 2000 : this.cost;
  }
}