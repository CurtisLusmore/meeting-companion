using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace meeting_companion
{
    public class MeetingHub : Hub
    {
        public Task Join(string room) => Groups.AddToGroupAsync(Context.ConnectionId, room);
        public Task Send(string room, string sound) => Clients.Group(room).SendAsync(sound);
    }
}
