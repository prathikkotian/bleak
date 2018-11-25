let passwords=['adritm24','lelecmrb1969','qetuwija','gyqoleme','9292720','rush9036','379714207774949','jye10245','113099s','rwbwpd6a',
    'lotenozy','ep0954325','qiciziko','xx_inuyash','1299jmg','6944458528','9211317','56861','Cambiasso80777','07913894498','jeurys14',
    'Serenity1326','akshayreena','fanafodu','nutsamon43','лгдшлщм75','RCBrcb222','puca2008','4107009988','lecacydi','fogicexe','curve33',
    'asdxiu','y4nbaqgsr707','ashmet01','perhansen54','zhunia','edorsey18','kedba','coolie1221','momo407489','mibogota1982','00882363',
    'Sweet_Home','mipulypu','vorimapo','hebynezo','8r56e6071','Superman004','[fkzdjxrf'];
describe('bleakCheck_1', ()=>{
    it('IT1 - check if library is handling null values correctly', () => {
        (function() {
            bleak.checkPassword(null);
        }).should.throw('Password cannot be null or empty');
    });
    it('IT2 - check if library is handling empty values correctly', () => {
        (function() {
            bleak.checkPassword('');
        }).should.throw('Password cannot be null or empty');
    });
	it('IT3 - check if library is handling non-string variables', () => {
        (function() {
            bleak.checkPassword(hello);
        }).should.throw('hello is not defined');
    });
    it('IT4 - check if compromised passwords are showing correctly', (done) => {
		let count = 0;
		let value = 0;
		for(var i=0;i<passwords.length;i++) {
			bleak.checkPassword(passwords[i], function (result) {
				if (result === true) {
					count++;
					value++;
				}else{
					value++;
				}
				if(value == passwords.length){
					count.should.equal(passwords.length);
					done();
				}
			});
		}
	}).timeout(180000);
});