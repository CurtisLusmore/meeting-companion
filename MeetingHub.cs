using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace meeting_companion
{
    public class MeetingHub : Hub
    {
        public Task Send(string sound) => Clients.All.SendAsync(sound);
    }
}
