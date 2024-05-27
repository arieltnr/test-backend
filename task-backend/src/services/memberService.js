const memberRepository = require('../repositories/memberRepository');

class MemberService {
  async getAllMembers() {
    return await memberRepository.findAll();
  }

  async getMemberById(code) {
    return await memberRepository.findByPk(code);
  }

  async createMember(member) {
    return await memberRepository.create(member);
  }

  async updateMember(code, updates) {
    return await memberRepository.update(code, updates);
  }
}

module.exports = new MemberService();
